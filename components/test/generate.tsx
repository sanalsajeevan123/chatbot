import React, { useState } from "react";

type MyProps = {
    activeTest:string
}

const GenerateComps = (props:MyProps) => {
    const [isToggle,setIsToggle] = useState(false)
    const [hoverMenu,setHoverMenu] = useState('')

    switch(props.activeTest){
        case 'toggle' : 
            return(
                <div className="w-full p-5 space-x-5 text-center space-y-2">
                    <h1>Click the button to toggle</h1>
                    <button onClick={()=>setIsToggle(prevstate => !prevstate)} className={`border-2 p-0.5 transform duration-500 ${isToggle ? `bg-emerald-400 border-emerald-400` : `bg-gray-500 border-gray-500 `} rounded-full w-14 h-7 focus:outline-none`}>
                        <p className={`h-full rounded-full bg-white w-5 transform duration-500 ${isToggle ? `translate-x-7` : `translate-x-0`}`}></p>
                    </button>
                </div>
            );
        case 'navBar' : 
            return(
                <div className="w-full p-5 space-x-5 text-center space-y-2">
                    <h1>Hover for naviation menu</h1>
                    <ul className="flex items-center justify-center h-12 bg-blue-500 border border-blue-500" onMouseLeave={()=>setHoverMenu('')}>
                        <li onMouseEnter={()=>setHoverMenu('Menu 1')} className={`w-32 h-full relative flex items-center justify-center hover:bg-white font-semibold transform duration-300`}>
                            <p className={`${hoverMenu === "Menu 1" ? `text-slate-800` : `text-white`}`}>Menu 1</p>
                            <div className={`w-32 ${hoverMenu === "Menu 1" ? `max-h-screen` : `max-h-0`} bg-gray-300 absolute top-full overflow-hidden transform duration-1000`}>
                                {[...Array(4)].map((item:any,key:any)=> <h1 className="w-full h-10 flex items-center justify-center" key={key}>Sub Menu</h1> )}
                            </div>
                        </li>
                        <li onMouseEnter={()=>setHoverMenu('Menu 2')} className={`w-32 h-full relative flex items-center justify-center hover:bg-white font-semibold transform duration-300`}>
                            <p className={`${hoverMenu === "Menu 2" ? `text-slate-800` : `text-white`}`}>Menu 2</p>
                            <div className={`w-32 ${hoverMenu === "Menu 2" ? `max-h-screen` : `max-h-0`} bg-gray-300 absolute top-full overflow-hidden transform duration-1000`}>
                            {[...Array(7)].map((item:any,key:any)=> <h1 className="w-full h-10 flex items-center justify-center" key={key}>Sub Menu</h1> )}
                            </div>
                        </li>
                        <li onMouseEnter={()=>setHoverMenu('Menu 3')} className={`w-32 h-full relative flex items-center justify-center hover:bg-white font-semibold transform duration-300`}>
                            <p className={`${hoverMenu === "Menu 3" ? `text-slate-800` : `text-white`}`}>Menu 3</p>
                            <div className={`w-32 ${hoverMenu === "Menu 3" ? `max-h-screen` : `max-h-0`} bg-gray-300 absolute top-full overflow-hidden transform duration-1000`}>
                            {[...Array(10)].map((item:any,key:any)=> <h1 className="w-full h-10 flex items-center justify-center" key={key}>Sub Menu</h1> )}
                            </div>
                        </li>
                    </ul>
                </div>
            );
        case 'swipe_slider' :
            return(
                <div className="w-full py-5 flex justify-center">
                    <div className="w-80 h-80 bg-white flex overflow-x-scroll snap-x snap-mandatory">
                        {[...Array(5)].map((item:any,key:any)=>(
                            <div className={`min-w-full min-h-full bg-gradient-to-br from-blue-500 to-emerald-600 flex items-center justify-center snap-center`} key={key}>
                                <p className="text-white text-5xl font-bold">{key+1}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        default :
                return <h1>default</h1>
    }
}
 
export default GenerateComps;