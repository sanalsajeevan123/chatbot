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
                    <ul className="flex items-center justify-center h-12 bg-gray-200" onMouseLeave={()=>setHoverMenu('')}>
                        <li onMouseEnter={()=>setHoverMenu('Menu 1')} className={`w-32 h-full relative flex items-center justify-center hover:bg-slate-300 font-semibold transform duration-300`}>
                            Menu 1
                            <div className={`w-32 ${hoverMenu === "Menu 1" ? `max-h-screen` : `max-h-0`} bg-gray-200 absolute top-full overflow-hidden transform duration-1000`}>
                                {[...Array(4)].map((item:any,key:any)=> <h1 className="w-full h-10 flex items-center justify-center" key={key}>Sub Menu</h1> )}
                            </div>
                        </li>
                        <li onMouseEnter={()=>setHoverMenu('Menu 2')} className={`w-32 h-full relative flex items-center justify-center hover:bg-slate-300 font-semibold transform duration-300`}>
                            Menu 2
                            <div className={`w-32 ${hoverMenu === "Menu 2" ? `max-h-screen` : `max-h-0`} bg-gray-200 absolute top-full overflow-hidden transform duration-1000`}>
                            {[...Array(7)].map((item:any,key:any)=> <h1 className="w-full h-10 flex items-center justify-center" key={key}>Sub Menu</h1> )}
                            </div>
                        </li>
                        <li onMouseEnter={()=>setHoverMenu('Menu 3')} className={`w-32 h-full relative flex items-center justify-center hover:bg-slate-300 font-semibold transform duration-300`}>
                            Menu 3
                            <div className={`w-32 ${hoverMenu === "Menu 3" ? `max-h-screen` : `max-h-0`} bg-gray-200 absolute top-full overflow-hidden transform duration-1000`}>
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
                            <div className={`min-w-full min-h-full bg-red-${key+2}00 flex items-center justify-center text-3xl font-bold snap-center`} key={key}>
                                {key+1}
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