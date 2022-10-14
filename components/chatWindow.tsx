import React, { EventHandler, useEffect, useState } from "react";

type MyProps = {
    isChatActive:boolean
    handleChatWindow:Function
}

const ChatWindow = (props:MyProps) =>{
    const [chatbox,setChatbox] = useState<{userType:string,message:any}[]>([
        {userType:"bot",message:"How can i help you ?"}
    ])
    const [userMessage,setUserMessage] = useState('')
    const [replayLoading,setReplayLoading] = useState(false)

    const handleUpdateChat=(e:any)=>{
        e.preventDefault();
        if(userMessage !== ""){
            let newMessage = {userType:"user",message:userMessage}
            setChatbox((prevState:any)=>([
                ...prevState,newMessage
            ]))
            setUserMessage('')
        }
    }

    useEffect(()=>{
        const ctbx = document.getElementById('chatbox');
        if(chatbox[chatbox.length -1].userType == 'user'){
            setReplayLoading(true)
            ctbx?.scrollTo({
                top:innerHeight,
                behavior: 'smooth',
                })
            setTimeout(()=>{
                let newMessage = {userType:"bot",message:'hi user'}
                setChatbox((prevState:any)=>([
                    ...prevState,newMessage
                ]))
                setReplayLoading(false)
            },1000)
        }else{
            ctbx?.scrollTo({
                top:innerHeight,
                behavior: 'smooth',
                })
        }
    },[chatbox])


    return(
        <div className={`absolute top-32 right-0 bg-white rounded-l-md overflow-hidden transform duration-500 sm:w-96 w-80 ${props.isChatActive ? `translate-x-0` : `translate-x-full`}`}>
            <div className="w-full flex">
                <button onClick={()=>props.handleChatWindow('false')} className="h-auto px-2 text-blue-500 bg-slate-700 shadow-inner">
                    <i className="fa-solid fa-angle-right text-4xl"/>
                </button>
                <div className="w-full bg-white">
                    <div className="w-full h-96 bg-white overflow-y-auto p-2 my-2 space-y-2 no-scrollbar relative" id="chatbox">
                        {chatbox.map((user:any,key:any)=>{
                            if(user.userType == 'bot'){
                                return(
                                    <div className="" key={key}>
                                        <h1 className="sm:bg-gray-300 bg-gray-400 text-sm p-2 rounded-tr-md rounded-bl-md w-fit">{user.message}</h1>
                                    </div>
                                    )
                            }else{
                                return(
                                    <div className="flex justify-end" key={key}>
                                        <h1 className="w-fit bg-blue-500 text-white text-sm p-2 rounded-tr-md rounded-bl-md text-right">{user.message}</h1>
                                    </div>
                                    )
                            }
                        })}
                    </div>
                    {chatbox[chatbox.length -1].userType == 'user' && replayLoading &&
                    <div className="absolute top-0 flex items-center justify-center p-1 w-full">
                        <i className="fa-solid fa-spinner animate-spin"></i>
                    </div>}
                    <form onSubmit={(e)=>handleUpdateChat(e)} autoComplete='off' className="w-full bg-slate-700 border-t border-l border-white rounded-l-md p-1 flex items-end justify-between space-x-1">
                        <input type="text" value={userMessage} onChange={(e)=>setUserMessage(e.target.value)} name="chatTextInputField" id="chatTextInputField" className="w-full focus:outline-none p-2 rounded-md bg-white"/>
                        <button className="rounded-md bg-white p-2 text-black">
                            <i className="fa-solid fa-microphone"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ChatWindow