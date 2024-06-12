import React, { useState } from "react";
import { RiAttachment2 } from "react-icons/ri";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { GrSend } from "react-icons/gr";
import { FaSpinner } from "react-icons/fa";

export default function MessageForm({ sendPrompt }) {
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function updatePrompt(e) {
        e.preventDefault();
        setPrompt(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        sendPrompt(prompt)
            .then(() => {
                setPrompt('');
            })
            .catch(error => {
                console.error('Error sending prompt:', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <div className="text-input mb-10">
            <form onSubmit={handleSubmit}>
                <div className="flex items-center px-3 py-2 rounded-xl bg-white border border-gray-300">
                    <textarea
                        id="chat"
                        rows="1"
                        className="font-baloo block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-none focus:ring-white focus:border-white"
                        placeholder="Your message..."
                        value={prompt}
                        onChange={updatePrompt}
                    ></textarea>

                    {/* Uncomment if needed
                    <button
                      type="button"
                      className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                    >
                      <RiAttachment2 />
                    </button>
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                    >
                      <HiOutlineEmojiSad />
                    </button>
                    */}

                    <button
                        type="submit"
                        className="inline-flex justify-center p-2 text-[#00BB1E] rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                        disabled={isLoading}
                    >
                        {isLoading ? <FaSpinner className="animate-spin" /> : <GrSend />}
                        <span className="sr-only">Send message</span>
                    </button>
                </div>
            </form>
        </div>
    );
}
