import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { apiHost } from "../utils/apiHost";
import { MdDelete } from "react-icons/md";

export default function Chats({ setActiveChatId, activeChatId, chatDetails, setChats }) {
    const { userData } = useContext(UserContext);

    function deleteChat(chatId) {
        fetch(`${apiHost}/chats/${chatId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${userData?.accessToken}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({})
        }).then(res => {
            if (res.ok) {
                setChats(chatDetails.chats.filter(chat => chat.id !== chatId));
            } else {
                console.error('Failed to delete chat');
            }
        });
    }

    return (
        (chatDetails?.chats || []).map((chat, index) => {
            const firstMessage = chat.messages?.[0] || { question: `chat ${index + 1}` };
            const componentKey = firstMessage.question.replace(/\W/g, '') + `_${index}`;
            const isActive = chat.id === activeChatId;
            return (
                <div
                    key={componentKey}
                    className={`flex flex-row justify-between items-center rounded-lg h-12 p-2 gap-3 cursor-pointer ${isActive ? 'bg-[#00BB1E]/60' : 'bg-[#00BB1E]/30'}`}
                    onClick={() => setActiveChatId(chat.id)}
                >
          <span className="text-[16px] font-baloo font-medium text-white" style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>
            {firstMessage.question}
          </span>
                    <div className="inline-flex self-center items-center">
                        <button
                            onClick={() => deleteChat(chat.id)}
                            className="inline-flex self-center items-center text-2xl font-medium text-center text-white rounded-lg"
                            type="button"
                        >
                            <MdDelete />
                        </button>
                    </div>
                </div>
            );
        })
    );
}
