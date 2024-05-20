import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { IoIosAdd } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { UserContext } from "../context/user";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { apiHost } from "../utils/vars";
import Chats from "./Chats";
import Messages from "./Messages";
import MessageForm from "./MessageForm";

export default function Chat() {
  const { userData } = useContext(UserContext)
  const [chatDetails, setChatDetails] = useState({activeChatId: null, chats: []})
  const navigate = useNavigate()

  useEffect(() => {
    if(!!userData){
      const chats = userData?.user?.chats || []
      setChatDetails({activeChatId: chats?.[0]?.id, chats: chats})
    } else {
      navigate('/home')
    }
  }, [])

  async function query(prompt) {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('answer')
    //   }, 3000)
    // })

    const response = await fetch(
      "https://mv3ybdg2l5gtchrn.us-east-1.aws.endpoints.huggingface.cloud",
      {
        headers: { 
          "Accept" : "application/json",
          "Authorization": "Bearer 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",
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

  async function sendPrompt(prompt){
    const chatId = chatDetails.activeChatId

    let chats = chatDetails.chats.map(chat => {
      if(chatId === chat.id){
        chat.messages.push({question: prompt, answer: null, persisted: false})
        return chat
      } else {
        return chat
      }
    })   
    
    setChats(chats)

    const response = await query(prompt)
    console.log("response: ", response)

    fetch(`${apiHost}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: `Bearer ${userData.accessToken}`
      },
      body: JSON.stringify({chat_id: chatId, question: prompt, answer: response})
    }).then(res => {
      if(res.ok){
        res.json().then(data => {
          chats = chatDetails.chats.map(chat => {
            if(chat.id === chatDetails.activeChatId){
              chat.messages = chat.messages.map(message => {
                if(message?.persisted === false){
                  return { question: message.question, answer: response }
                } else {
                  return message
                }
              })
              return chat
            } else {
              return chat
            }
          })   
          
          setChats(chats)  
        })
      } else {
        console.error(res.json())
      }
    })   
  }

  function setActiveChatId(id){
    setChatDetails(chatDetails => ({activeChatId: id, chats: chatDetails.chats})) 
  }

  function setChats(chats){
    setChatDetails(chatDetails => ({activeChatId: chatDetails.activeChatId, chats: chats}))
  }

  useEffect(() => {
    if(!userData){
      navigate('/home')
    }
  }, [userData])

  function addChat(e){
    e.preventDefault()

    fetch(`${apiHost}/chats`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userData.accessToken}`
      }
    }).then(res => {
      if(res.ok){
        res.json().then(data => {
          setChats([...chatDetails.chats, data.chat])
        })
      } else {
        console.error(res.json())
      }
    })
  }

  return (
    <>
      <div className="chat h-screen">
        <Navbar />
        <div className="flex flex-row px-8 md:px-10   overflow-hidden h-full gap-4">
          <section className="hidden md:block side-bar bg-[#955A02]/50 py-10 px-5 rounded-xl  w-3/12">
            <div className="flex flex-col justify-between h-full">
              <div className="action-buttons">
                <div className="new-chat flex flex-row justify-between items-center">
                  <button
                    onClick={addChat}
                    type="button"
                    className="text-black bg-[#F9FAFA] font-medium rounded-md text-sm p-1 text-center inline-flex items-center  "
                  >
                    <IoIosAdd />
                  </button>

                  <button
                    type="button"
                    className="text-white border border-white  font-medium rounded-md text-sm p-2.5 text-center inline-flex items-center  "
                  >
                    <MdMenu />
                  </button>
                </div>
              </div>
              <div className="history h-full">
                <div className="flex flex-col gap-2.5 my-8">
                  <Chats setActiveChatId={setActiveChatId} chatDetails={chatDetails} setChats={setChats} />
                </div>
              </div>
              <div className="account">
                <div className=" border border-gray-100 rounded-lg bg-white">
                  <a href="#" className="items-center block p-3 sm:flex">
                    <img
                      className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
                      src={`https://ui-avatars.com/api/?name=${userData?.user?.full_name}`}
                      alt="Jese Leos image"
                    />
                    <div className="flex flex-col">
                      <p className="text-[16px] font-baloo font-normal">Welcome back</p>
                      <p className="text-[16px] font-baloo font-bold">{userData?.user?.full_name}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="chat-area w-full md:w-9/12 ">
            <div className="flex flex-col justify-between h-full">
              <div className="search ">
                <div className="flex flex-row  md:justify-end items-center">
                  <div className="flex flex-row items-center sm:w-full md:w-auto bg-white px-6 border border-gray-300 rounded-lg">
                    <CiSearch />
                    <input
                      type="text"
                      placeholder="Search"
                      className="font-baloo border border-none text-gra-300 focus:ring-0 focus:outline-none focus:white"
                    />
                  </div>
                </div>
              </div>

              <div className="actual-chat my-5 overflow-y-auto h-full hide-scrollbar">
                <Messages chatDetails={chatDetails}/>
              </div>

              <MessageForm chatDetails={chatDetails} sendPrompt={sendPrompt}/>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
