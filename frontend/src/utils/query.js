async function query(prompt, use='huggingface'){
    if(use === 'huggingface'){
        return await huggingface(prompt)
    } else if (use === 'askyourpdf'){
        return await askyourpdf(prompt)
    }
}

async function askyourpdf(prompt){

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

export default query