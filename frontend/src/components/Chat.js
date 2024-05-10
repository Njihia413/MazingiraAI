import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { IoIosAdd } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { RiAttachment2 } from "react-icons/ri";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { GrSend } from "react-icons/gr";
import { UserContext } from "../context/user";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { apiHost } from "../utils/vars";
import Chats from "./Chats";

export default function Chat() {
  const { userData } = useContext(UserContext)
  const [chatDetails, setChatDetails] = useState({activeChatId: null, chats: []})
  const navigate = useNavigate()

  useEffect(() => {
    if(!!userData){
      const chats = userData?.user?.chats || []
      setChatDetails({activeChatId: chats[0].id, chats: chats})
    } else {
      navigate('/home')
    }
  }, [])

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

  function getChats(){
    return userData?.user?.chats || []
  }

  function getMessages(){
    const activeChat = userData?.user?.chats?.find(chat => chat.id === chatDetails.activeChatId) || {messages: []}
    return activeChat.messages
  }

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
                      src="https://ui-avatars.com/api/?name=James+Kanyiri"
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
                <div className="flex flex-col gap-6 ">
                  {
                    getMessages().map(message => {
                      return (
                        <>
                          <div className="flex items-start gap-2.5">
                            <img
                              className="w-8 h-8 rounded-full"
                              src="https://ui-avatars.com/api/?name=James+Kanyiri"
                              alt="James"
                            ></img>
                            <div className="flex flex-col w-full  leading-1.5 p-4 border border-gray-300  bg-white rounded-e-xl rounded-es-xl">
                              <p className="text-[16px] font-baloo font-medium py-2.5 text-gray-500">
                                { message.question }
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <div className="flex flex-col w-full  leading-1.5 p-4 border border-gray-300  bg-white rounded-e-xl rounded-ss-xl">
                              <p className="text-[16px] font-baloo font-medium py-2.5 text-gray-500">
                                { message.answer }
                              </p>
                            </div>
                            <img
                              className="w-8 h-8 rounded-full"
                              src="https://ui-avatars.com/api/?name=James+Kanyiri"
                              alt="James"
                            ></img>
                          </div>
                        </>
                      )
                    })
                  }
                  {/*<div className="flex items-start gap-2.5">*/}
                  {/*  <div className="flex flex-col w-full  leading-1.5 p-4 border border-gray-300  bg-white rounded-e-xl rounded-ss-xl">*/}
                  {/*    <p className="text-[16px] font-baloo font-medium py-2.5 text-gray-500">*/}
                  {/*      That's awesome. I think our users will really appreciate*/}
                  {/*      the improvements.*/}
                  {/*    </p>*/}
                  {/*  </div>*/}
                  {/*  <img*/}
                  {/*    className="w-8 h-8 rounded-full"*/}
                  {/*    src="https://ui-avatars.com/api/?name=James+Kanyiri"*/}
                  {/*    alt="James"*/}
                  {/*  ></img>*/}
                  {/*</div>*/}
                  {/*<div className="flex items-start gap-2.5">*/}
                  {/*  <img*/}
                  {/*    className="w-8 h-8 rounded-full"*/}
                  {/*    src="https://ui-avatars.com/api/?name=James+Kanyiri"*/}
                  {/*    alt="James"*/}
                  {/*  ></img>*/}
                  {/*  <div className="flex flex-col w-full  leading-1.5 p-4 border border-gray-300  bg-white rounded-e-xl rounded-es-xl">*/}
                  {/*    <p className="text-[16px] font-baloo font-medium py-2.5 text-gray-500">*/}
                  {/*      That's awesome. I think our users will really appreciate*/}
                  {/*      the improvements.*/}
                  {/*    </p>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*<div className="flex items-start gap-2.5">*/}
                  {/*  <div className="flex flex-col w-full  leading-1.5 p-4 border border-gray-300  bg-white rounded-e-xl rounded-ss-xl">*/}
                  {/*    <p className="text-[16px] font-baloo font-medium py-2.5 text-gray-500">*/}
                  {/*      That's awesome. I think our users will really appreciate*/}
                  {/*      the improvements.*/}
                  {/*    </p>*/}
                  {/*  </div>*/}
                  {/*  <img*/}
                  {/*    className="w-8 h-8 rounded-full"*/}
                  {/*    src="https://ui-avatars.com/api/?name=James+Kanyiri"*/}
                  {/*    alt="James"*/}
                  {/*  ></img>*/}
                  {/*</div>*/}
                  {/*<div className="flex items-start gap-2.5">*/}
                  {/*  <img*/}
                  {/*    className="w-8 h-8 rounded-full"*/}
                  {/*    src="https://ui-avatars.com/api/?name=James+Kanyiri"*/}
                  {/*    alt="James"*/}
                  {/*  ></img>*/}
                  {/*  <div className="flex flex-col w-full  leading-1.5 p-4 border border-gray-300  bg-white rounded-e-xl rounded-es-xl">*/}
                  {/*    <p className="text-[16px] font-baloo font-medium py-2.5 text-gray-500">*/}
                  {/*      That's awesome. I think our users will really appreciate*/}
                  {/*      the improvements.*/}
                  {/*    </p>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*<div className="flex items-start gap-2.5">*/}
                  {/*  <div className="flex flex-col w-full  leading-1.5 p-4 border border-gray-300  bg-white rounded-e-xl rounded-ss-xl">*/}
                  {/*    <p className="text-[16px] font-baloo font-medium py-2.5 text-gray-500">*/}
                  {/*      That's awesome. I think our users will really appreciate*/}
                  {/*      the improvements.*/}
                  {/*    </p>*/}
                  {/*  </div>*/}
                  {/*  <img*/}
                  {/*    className="w-8 h-8 rounded-full"*/}
                  {/*    src="https://ui-avatars.com/api/?name=James+Kanyiri"*/}
                  {/*    alt="James"*/}
                  {/*  ></img>*/}
                  {/*</div>*/}
                </div>
              </div>

              <div className="text-input mb-10">
                <form>
                  <div className="flex items-center px-3 py-2 rounded-xl bg-white border border-gray-300">
                    <textarea
                      id="chat"
                      rows="1"
                      className="font-baloo block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-none focus:ring-white focus:border-white "
                      placeholder="Your message..."
                    ></textarea>

                    <button
                      type="button"
                      className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
                    >
                      <RiAttachment2 />
                    </button>
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
                    >
                      <HiOutlineEmojiSad />
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                    >
                      <GrSend />
                      <span className="sr-only">Send message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
