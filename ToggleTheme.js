import React, { useEffect, useState } from "react";
import "./App.css";
import { BiMoon,BiSun } from "react-icons/bi";

const ToggleTheme = ()=>{
    const [theme,setTheme]=useState("light-theme")
    const [toggle,setToggle] = useState(false)

    const dark = () =>{
      if(toggle ){
        console.log('dark-theme')
        document.body.className = theme;
        setTheme("light-theme")
        setToggle(!toggle)
      }else{
        console.log('light-theme')
        document.body.className = theme;
        setTheme("dark-theme")
        setToggle(!toggle)

      }
    };
    // useEffect(()=>{
    //     document.body.className = theme;
    //   },[]);
    
   return(
    <>
       <div className="color-mode">
       <button onClick={dark}>
        <BiMoon/><BiSun/>
       </button>
       </div>
    </>
   )
  }
  export default ToggleTheme;