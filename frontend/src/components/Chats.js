import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { apiHost } from "../utils/vars";
import { MdDelete } from "react-icons/md";

export default function Chats({setActiveChatId, chatDetails, setChats}){
    const { userData } = useContext(UserContext)

    function deleteChat(chatId){
        fetch(`${apiHost}/chats/${chatId}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${userData?.accessToken}`
          }
        }).then(res => {
          if(res.ok){
            setChats(chatDetails.chats.filter(chat => chat.id !== chatId))
          } else if(!res.ok) {
            console.error('Failed to delete chat')
          }
        })
    }

    return (
        (chatDetails?.chats || []).map((chat, index) => {
            const firstMessage = chat.messages?.[0] || {question: `chat ${index + 1}`}
            return (
              <div key={firstMessage.question} className="flex flex-row justify-between items-center bg-[#00BB1E]/30  rounded-lg h-12 p-2 gap-3" onClick={()=>setActiveChatId(chat.id)}>
                <span className="text-[16px] font-baloo font-medium text-white" style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden"}}>
                  { firstMessage.question }
                </span>
                <div className="inline-flex self-center items-center">
                  <button
                    onClick={() => deleteChat(chat.id)}
                    className="inline-flex self-center items-center  text-2xl font-medium text-center text-white  rounded-lg  "
                    type="button"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            )
          })
    )
}