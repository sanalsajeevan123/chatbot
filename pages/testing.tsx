import React, { useState } from "react";
import GenerateComps from "../components/test/generate";

const TestPage=()=>{
    const [activeTest,setActiveTest] = useState("")
    const [options,setOptions] = useState(['toggle','navBar','swipe_slider'])

    return(
        <div className="h-screen w-full grid content-center gap-y-2 relative">
            <h1 className="text-center text-xl font-bold">Click to choose your option</h1>
            {options.map((item:string,key:any)=>(
                <button onClick={()=>setActiveTest(item)} key={key} className="text-lg font-bold text-center text-blue-500 focus:outline-none capitalize">{item}</button>
            ))}
            {activeTest !== "" && 
            <div className="absolute top-0 h-screen w-full p-5 bg-white">
                <div className="w-full text-end">
                    <button onClick={()=>setActiveTest("")} className="py-1 px-2.5 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none"><i className="fas fa-times text-lg"/></button>
                </div>
                <GenerateComps
                    activeTest={activeTest}
                />
            </div>}
        </div>
    )
}
export default TestPage