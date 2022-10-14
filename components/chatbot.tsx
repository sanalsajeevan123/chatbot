import Image from "next/image";
import React, { useState } from "react";

type MyProps = {
    isWelcomeChatActive:boolean
    setIsWelcomeChatActive:Function
    handleChatWindow:Function
}

const Chatbot = (props:MyProps) => {
    
    return(
        <div className={`absolute top-1/3 right-0 bg-white rounded-l-md overflow-hidden transform duration-500 ${props.isWelcomeChatActive ? `translate-x-0` : `translate-x-full`}`}>
            <div className="">
                <div className="relative h-36 w-40 bg-white">
                     <Image
                        src={'/Ava Wave.gif'}
                        alt="chatbot"
                        layout="responsive"
                        height={100}
                        width={100}
                        objectFit='contain'
                     />
                </div>
                <div className="space-y-2 py-4 px-5">
                    <h1 className="text-xs font-semibold text-gray-400 text-center">Hii, may i help you ?</h1>
                    <div className="flex items-center justify-around space-x-4">
                        <button onClick={()=>props.setIsWelcomeChatActive(false)} className="rounded-md bg-gray-400 text-white text-sm font-semibold px-4 py-1">No</button>
                        <button onClick={()=>props.handleChatWindow('open')} className="rounded-md bg-emerald-500 text-white text-sm font-semibold px-4 py-1">Yes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Chatbot