import docIds from "./docIds";

async function query({prompt, use='huggingface'}){
    if(use === 'huggingface'){
        return await huggingface(prompt)
    } else if (use === 'askyourpdf'){
        const response = await askyourpdf(prompt)
        return response.answer.message
    }
}

async function askyourpdf(chat){
  const c = JSON.parse(JSON.stringify(chat))
  const messages = getMessages(c)
  const payload = {
    "documents": docIds.map(item => item.docId),
  }

  if(messages.length){
    payload['messages'] = messages
  }

  const response = await fetch('https://api.askyourpdf.com/v1/api/knowledge_base_chat?model_name=GPT3', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      'x-api-key': process.env.REACT_APP_ASKYOURPDF_TOKEN
    },
    body: JSON.stringify(payload),
  });

  return await response.json();
}

async function huggingface(prompt) {
    prompt = prompt.replace(/\?/g, "") + "?"
    const response = await fetch(
      "https://mv3ybdg2l5gtchrn.us-east-1.aws.endpoints.huggingface.cloud",
      {
        headers: {
          "Accept" : "application/json",
          "Authorization": "Bearer " + process.env.REACT_APP_HUGGINGFACE_TOKEN,
          "Content-Type": "application/json" 
        },
        method: "POST",
        body: JSON.stringify({
          inputs: prompt,
          parameters: {}
        }),
      }
    );

    let result = await response.json();
    result = (result || []).map(item => item.generated_text)[0]
    return result.replace(/.*?[\.?!]/, '')
}

function getMessages(chat){
  const messages = chat?.messages || []

  const result = []
  messages.forEach(m => {
    result.push({ sender: 'user', message: m.question })
    messages.push({ sender: 'bot', result: m.answer })
  })

  return result
}

export default query