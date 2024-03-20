import React from "react";
import Navbar from "./Navbar";
import { IoIosAdd } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { RiAttachment2 } from "react-icons/ri";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { GrSend } from "react-icons/gr";

export default function Chat() {
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
                    type="button"
                    class="text-black bg-[#F9FAFA] font-medium rounded-md text-sm p-1 text-center inline-flex items-center  "
                  >
                    <IoIosAdd />
                  </button>

                  <button
                    type="button"
                    class="text-white border border-white  font-medium rounded-md text-sm p-2.5 text-center inline-flex items-center  "
                  >
                    <MdMenu />
                  </button>
                </div>
              </div>
              <div className="history h-full">
                <div class="flex flex-col gap-2.5 my-8">
                  <div class="flex flex-row justify-between items-center bg-[#00BB1E]/30  rounded-lg h-12 p-2 gap-3">
                    <span class="text-sm font-thin text-white ">
                      How to solve climate
                    </span>
                    <div class="inline-flex self-center items-center">
                      <button
                        class="inline-flex self-center items-center  text-2xl font-medium text-center text-white  rounded-lg  "
                        type="button"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                  <div class="flex flex-row justify-between items-center bg-[#00BB1E]/30  rounded-lg h-12 p-2 gap-3">
                    <span class="text-sm font-thin text-white ">
                      How to solve climate
                    </span>
                    <div class="inline-flex self-center items-center">
                      <button
                        class="inline-flex self-center items-center  text-2xl font-medium text-center text-white  rounded-lg  "
                        type="button"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                  <div class="flex flex-row justify-between items-center bg-[#00BB1E]/30  rounded-lg h-12 p-2 gap-3">
                    <span class="text-sm font-thin text-white ">
                      How to solve climate
                    </span>
                    <div class="inline-flex self-center items-center">
                      <button
                        class="inline-flex self-center items-center  text-2xl font-medium text-center text-white  rounded-lg  "
                        type="button"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                  <div class="flex flex-row justify-between items-center bg-[#00BB1E]/30  rounded-lg h-12 p-2 gap-3">
                    <span class="text-sm font-thin text-white ">
                      How to solve climate
                    </span>
                    <div class="inline-flex self-center items-center">
                      <button
                        class="inline-flex self-center items-center  text-2xl font-medium text-center text-white  rounded-lg  "
                        type="button"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                  <div class="flex flex-row justify-between items-center bg-[#00BB1E]/30  rounded-lg h-12 p-2 gap-3">
                    <span class="text-sm font-thin text-white ">
                      How to solve climate
                    </span>
                    <div class="inline-flex self-center items-center">
                      <button
                        class="inline-flex self-center items-center  text-2xl font-medium text-center text-white  rounded-lg  "
                        type="button"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                  <div class="flex flex-row justify-between items-center bg-[#00BB1E]/30  rounded-lg h-12 p-2 gap-3">
                    <span class="text-sm font-thin text-white ">
                      How to solve climate
                    </span>
                    <div class="inline-flex self-center items-center">
                      <button
                        class="inline-flex self-center items-center  text-2xl font-medium text-center text-white  rounded-lg  "
                        type="button"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                  <div class="flex flex-row justify-between items-center bg-[#00BB1E]/30  rounded-lg h-12 p-2 gap-3">
                    <span class="text-sm font-thin text-white ">
                      How to solve climate
                    </span>
                    <div class="inline-flex self-center items-center">
                      <button
                        class="inline-flex self-center items-center  text-2xl font-medium text-center text-white  rounded-lg  "
                        type="button"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                  <div class="flex flex-row justify-between items-center bg-[#00BB1E]/30  rounded-lg h-12 p-2 gap-3">
                    <span class="text-sm font-thin text-white ">
                      How to solve climate
                    </span>
                    <div class="inline-flex self-center items-center">
                      <button
                        class="inline-flex self-center items-center  text-2xl font-medium text-center text-white  rounded-lg  "
                        type="button"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="account">
                <div class=" border border-gray-100 rounded-lg bg-white">
                  <a href="#" class="items-center block p-3 sm:flex">
                    <img
                      class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
                      src="https://ui-avatars.com/api/?name=James+Kanyiri"
                      alt="Jese Leos image"
                    />
                    <div class="flex flex-col">
                      <p className="text-xs font-normal">Welcome back</p>
                      <p className="text-sm font-bold">James Kanyiri</p>
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
                      className="border border-none  text-gra-300 focus:ring-0 focus:outline-none focus:white"
                    />
                  </div>
                </div>
              </div>

              <div className="actual-chat my-5 overflow-y-auto h-full hide-scrollbar">
                <div className="flex flex-col gap-6 ">
                  <div class="flex items-start gap-2.5">
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://ui-avatars.com/api/?name=James+Kanyiri"
                      alt="James"
                    ></img>
                    <div class="flex flex-col w-full  leading-1.5 p-4 border border-gray-300  bg-white rounded-e-xl rounded-es-xl">
                      <p class="text-sm font-thin py-2.5 text-gray-500">
                        That's awesome. I think our users will really appreciate
                        the improvements.
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start gap-2.5">
                    <div class="flex flex-col w-full  leading-1.5 p-4 border border-gray-300  bg-white rounded-e-xl rounded-ss-xl">
                      <p class="text-sm font-thin py-2.5 text-gray-500">
                        That's awesome. I think our users will really appreciate
                        the improvements.
                      </p>
                    </div>
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://ui-avatars.com/api/?name=James+Kanyiri"
                      alt="James"
                    ></img>
                  </div>
                  <div class="flex items-start gap-2.5">
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://ui-avatars.com/api/?name=James+Kanyiri"
                      alt="James"
                    ></img>
                    <div class="flex flex-col w-full  leading-1.5 p-4 border border-gray-300  bg-white rounded-e-xl rounded-es-xl">
                      <p class="text-sm font-thin py-2.5 text-gray-500">
                        That's awesome. I think our users will really appreciate
                        the improvements.
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start gap-2.5">
                    <div class="flex flex-col w-full  leading-1.5 p-4 border border-gray-300  bg-white rounded-e-xl rounded-ss-xl">
                      <p class="text-sm font-thin py-2.5 text-gray-500">
                        That's awesome. I think our users will really appreciate
                        the improvements.
                      </p>
                    </div>
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://ui-avatars.com/api/?name=James+Kanyiri"
                      alt="James"
                    ></img>
                  </div>
                  <div class="flex items-start gap-2.5">
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://ui-avatars.com/api/?name=James+Kanyiri"
                      alt="James"
                    ></img>
                    <div class="flex flex-col w-full  leading-1.5 p-4 border border-gray-300  bg-white rounded-e-xl rounded-es-xl">
                      <p class="text-sm font-thin py-2.5 text-gray-500">
                        That's awesome. I think our users will really appreciate
                        the improvements.
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start gap-2.5">
                    <div class="flex flex-col w-full  leading-1.5 p-4 border border-gray-300  bg-white rounded-e-xl rounded-ss-xl">
                      <p class="text-sm font-thin py-2.5 text-gray-500">
                        That's awesome. I think our users will really appreciate
                        the improvements.
                      </p>
                    </div>
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://ui-avatars.com/api/?name=James+Kanyiri"
                      alt="James"
                    ></img>
                  </div>
                  <div class="flex items-start gap-2.5">
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://ui-avatars.com/api/?name=James+Kanyiri"
                      alt="James"
                    ></img>
                    <div class="flex flex-col w-full  leading-1.5 p-4 border border-gray-300  bg-white rounded-e-xl rounded-es-xl">
                      <p class="text-sm font-thin py-2.5 text-gray-500">
                        That's awesome. I think our users will really appreciate
                        the improvements.
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start gap-2.5">
                    <div class="flex flex-col w-full  leading-1.5 p-4 border border-gray-300  bg-white rounded-e-xl rounded-ss-xl">
                      <p class="text-sm font-thin py-2.5 text-gray-500">
                        That's awesome. I think our users will really appreciate
                        the improvements.
                      </p>
                    </div>
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://ui-avatars.com/api/?name=James+Kanyiri"
                      alt="James"
                    ></img>
                  </div>
                  <div class="flex items-start gap-2.5">
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://ui-avatars.com/api/?name=James+Kanyiri"
                      alt="James"
                    ></img>
                    <div class="flex flex-col w-full  leading-1.5 p-4 border border-gray-300  bg-white rounded-e-xl rounded-es-xl">
                      <p class="text-sm font-thin py-2.5 text-gray-500">
                        That's awesome. I think our users will really appreciate
                        the improvements.
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start gap-2.5">
                    <div class="flex flex-col w-full  leading-1.5 p-4 border border-gray-300  bg-white rounded-e-xl rounded-ss-xl">
                      <p class="text-sm font-thin py-2.5 text-gray-500">
                        That's awesome. I think our users will really appreciate
                        the improvements.
                      </p>
                    </div>
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://ui-avatars.com/api/?name=James+Kanyiri"
                      alt="James"
                    ></img>
                  </div>
                </div>
              </div>

              <div className="text-input mb-10">
                <form>
                  <div class="flex items-center px-3 py-2 rounded-xl bg-white border border-gray-300">
                    <textarea
                      id="chat"
                      rows="1"
                      class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-none focus:ring-white focus:border-white "
                      placeholder="Your message..."
                    ></textarea>

                    <button
                      type="button"
                      class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
                    >
                      <RiAttachment2 />
                    </button>
                    <button
                      type="button"
                      class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
                    >
                      <HiOutlineEmojiSad />
                    </button>
                    <button
                      type="submit"
                      class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                    >
                      <GrSend />
                      <span class="sr-only">Send message</span>
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
