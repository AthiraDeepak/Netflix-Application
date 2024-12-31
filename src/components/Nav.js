import { useState } from 'react';
import './Nav.css';

import React from 'react'

function Nav() {
    const [show,setShow]=useState(false)

    window.addEventListener('scroll',()=>{
        if(window.scrollY>200){
            setShow(true)
        }else{
            setShow(false);
        }
    })
//console.log(show)

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png'
        alt='netflix logo'>
        </img>
    </div>
  )
}

export default Nav

