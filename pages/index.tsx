import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Chatbot from '../components/chatbot'
import ChatWindow from '../components/chatWindow'

const Home: NextPage = () => {
  const [isWelcomeChatActive,setIsWelcomeChatActive] = useState(false)
  const [isChatActive,setIsChatActive] = useState(false)

  const activateChat=()=>{
    let activetimeOut = setTimeout(()=>{
      setIsWelcomeChatActive(true)
      clearTimeout(activetimeOut)
    },5000)
  }

  const handleChatWindow=(action:string)=>{
    if(action == 'open'){
      setIsWelcomeChatActive(false)
      setIsChatActive(true)
    }else{
      setIsChatActive(false)
    }
  }

  useEffect(()=>{
    activateChat();
  },[])

  return (
    <div>
      <Head>
        <title>Chatbot</title>
        <meta name="description" content="helper chatbot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-full h-screen bg-gradient-to-br from-emerald-600 to-blue-400 relative overflow-hidden'>
        <div className='w-full bg-gradient-to-br from-red-700 to-cyan-600 bg-clip-text pt-6'>
          <h1 className='font-bold text-6xl text-center text-transparent'>Chatbot Welcomes You</h1>
        </div>
        <Chatbot
          isWelcomeChatActive={isWelcomeChatActive}
          setIsWelcomeChatActive={setIsWelcomeChatActive}
          handleChatWindow={handleChatWindow}
        />
        <ChatWindow
          isChatActive={isChatActive}
          handleChatWindow={handleChatWindow}
        />
      </div>
    </div>
  )
}

export default Home
