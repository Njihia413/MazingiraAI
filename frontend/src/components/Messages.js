import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user";

export default function Messages({chatDetails}){
    const { userData } = useContext(UserContext)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const activeChatId = chatDetails.activeChatId
        const activeChat = chatDetails.chats.find(chat => chat.id === activeChatId) || {messages: []}
        setMessages(activeChat.messages)
    }, [chatDetails])

    return (
        <div className="flex flex-col gap-6 p-4">
        {
          messages.map(message => {
            return (
              <>
                <div className="flex items-start gap-2.5">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={`https://ui-avatars.com/api/?name=${userData?.user?.full_name}`}
                    alt={`${userData?.user?.full_name}`}
                  ></img>
                  <div className="flex flex-col w-full  leading-1.5 p-4 border border-gray-300  bg-white rounded-e-xl rounded-es-xl">
                    <p className="text-[16px] font-baloo font-medium py-2.5 text-gray-500">
                      { message.question }
                    </p>
                  </div>
                </div>
                {
                    message.answer !== null ?
                        <div className="flex items-start gap-2.5">
                            <div className="flex flex-col w-full leading-1.5 p-4 border border-gray-300  bg-white rounded-e-xl rounded-ss-xl">
                                <p className="text-[16px] font-baloo font-medium py-2.5 text-gray-500">
                                { message.answer }
                                </p>
                            </div>
                        </div>
                    : message?.error ?
                        <div className="flex items-start gap-2.5">
                            <div className="flex flex-col w-full leading-1.5 p-4 border border-gray-300  bg-white rounded-e-xl rounded-ss-xl" style={{border: 'solid 0.1rem red', backgroudColor: 'red'}}>
                                <p className="text-[16px] font-baloo font-medium py-2.5 text-gray-500">
                                { message.answer }
                                </p>
                            </div>
                        </div>
                    : ''
                }
              </>
            )
          })
        }
      </div>
    )
}