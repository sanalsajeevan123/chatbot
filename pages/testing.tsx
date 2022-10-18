import React, { useState } from "react";

const TestPage=()=>{
    const [activeTest,setActiveTest] = useState("")
    const [isToggle,setIsToggle] = useState(false)

    return(
        <div className="h-screen w-full grid content-center gap-y-2 relative">
            <h1 className="text-center text-xl font-bold">Click to choose your option</h1>
            <button onClick={()=>setActiveTest('toggle')} className="text-lg font-bold text-center text-blue-500">Toggle</button>
            {activeTest !== "" && 
            <div className="absolute top-0 h-screen w-full p-5 bg-white">
                <div className="w-full text-end">
                    <button onClick={()=>setActiveTest("")} className="py-1 px-2 rounded-md bg-gray-100 hover:bg-gray-300"><i className="fas fa-times text-lg"/></button>
                </div>
                {activeTest == 'toggle' && 
                <div className="w-full p-5 space-x-5 text-center space-y-2">
                    <h1>Click the button to toggle</h1>
                    <button onClick={()=>setIsToggle(prevstate => !prevstate)} className={`border-2 p-0.5 transform duration-500 ${isToggle ? `bg-emerald-400 ` : `bg-gray-500 `} rounded-full w-14 h-7`}>
                        <p className={`h-full rounded-full bg-white w-5 transform duration-500 ${isToggle ? `translate-x-7` : `translate-x-0`}`}></p>
                    </button>
                </div>}
            </div>}
        </div>
    )
}
export default TestPage