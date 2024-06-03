import React, { useContext, useEffect, useState } from 'react'
import './theme.css'
import { PiSunDuotone } from "react-icons/pi";
import { mycontext } from '../context';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";

function Theme() {
    const {istheme,setistheme} = useContext(mycontext)
    // const setdarkmode = () => {
    //     document.querySelector('body').setAttribute('data-theme', 'dark')
    //     localStorage.setItem('selectedtheme','dark')
    //   }
    //   const setlightmode = () => {
    //     document.querySelector('body').setAttribute('data-theme', 'light')
    //     localStorage.setItem('selectedtheme','light')
    //   }
    //   const selectedtheme = localStorage.getItem('selectedtheme')
    // if(selectedtheme === 'dark'){
    //     setdarkmode()
    // }else{
    //     setlightmode()
    // }
     function handletheme(t){
        if(t.target.checked){
            document.querySelector('body').setAttribute('data-theme',"dark")
            localStorage.setItem('selectedtheme','dark')
            setistheme(true)
        }else{
            document.querySelector('body').setAttribute('data-theme','light')
            localStorage.setItem('selectedtheme','light')
            setistheme(false)
        }
     }
     useEffect(()=>{
         const selectedtheme = localStorage.getItem('selectedtheme')
         if(selectedtheme === 'dark'){
            document.querySelector('body').setAttribute('data-theme',"dark")
            document.getElementById('toggle-btn').checked = true ;
         }else{
            document.querySelector('body').setAttribute('data-theme','light')
            document.getElementById('toggle-btn').checked = false ;
         }
     },[])
    return (
        <div className='t-box'>
            <div className="t-heads">
            <h1>THEMES</h1>
            </div>
            <div className="switches">
                <input type='checkbox' className='toggle-theme' id='toggle-btn' checked={istheme} onChange={handletheme}/>
                <label for='toggle-btn' >
                    <span className='sun'><BsSunFill /></span>
                    <span className='moon'><BsFillMoonStarsFill/></span>
                </label>
            </div>
        </div>
    )
}

export default Theme