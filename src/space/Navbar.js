import React from "react";
import './Navbar.css'
import spacelogo from './space-tourism-website-main/starter-code/assets/shared/logo.svg'
import menu from './space-tourism-website-main/starter-code/assets/shared/icon-hamburger.svg'
import close from './space-tourism-website-main/starter-code/assets/shared/icon-close.svg'
import { useState } from "react";
import { Outlet,Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import Home from "./Home";



const Navbar = () =>{
  const home = useRef(null) 
  const dest = useRef(null)
  const crew = useRef(null)
  const tech = useRef(null)
 
 useEffect(()=>{

  home.current.style.borderBottom=" solid white"
  dest.current.addEventListener('click', function(){
    dest.current.style.borderBottom=" solid white"
    home.current.style.borderBottom=" none"
    crew.current.style.borderBottom=" none"
    tech.current.style.borderBottom=" none"
  })
  crew.current.addEventListener('click', function(){
    crew.current.style.borderBottom=" solid white"
    home.current.style.borderBottom=" none"
    dest.current.style.borderBottom=" none"
    tech.current.style.borderBottom=" none"
  })
  tech.current.addEventListener('click', function(){
    tech.current.style.borderBottom=" solid white"
    home.current.style.borderBottom=" none"
    dest.current.style.borderBottom=" none"
    crew.current.style.borderBottom=" none"
  })
  home.current.addEventListener('click', function(){
    home.current.style.borderBottom=" solid white"
    crew.current.style.borderBottom=" none"
    dest.current.style.borderBottom=" none"
    tech.current.style.borderBottom=" none"
  })

  
 },[])
  const[show,setShow]= useState(true)

 


    return(
      <div className="navcover">
        <div className="logo"><img src={spacelogo} className="sl"/></div>
        <div className="line"></div>
     
        <div  className="list">
          
           {show?<div className="menu"><img src={menu} onClick={()=>setShow(!show)} className="ham"/></div>:null}
            <div ref={home} className="lis"><Link to="/" style={{textDecoration:"none"}}><div className="num">00</div></Link><Link to="/" style={{textDecoration:"none", color:'white'}}>HOME</Link></div>
            <div   ref={dest} className="lis"><Link to="destination" style={{textDecoration:"none"}}><div className="num">01</div></Link><Link to="destination" style={{textDecoration:"none", color:'white'}}>DESTINATION</Link></div>
            <div  ref={crew} className="lis"><Link to="crew" style={{textDecoration:"none"}}><div className="num">02</div></Link><Link to="crew" style={{textDecoration:"none", color:'white'}}>CREW</Link></div>
            <div ref={tech}  className="lis"><Link to="technology" style={{textDecoration:"none"}}><div className="num" >03</div></Link><Link to="technology" style={{textDecoration:"none", color:'white'}}>TECHNOLOGY</Link></div>
        </div>

        <div className="modalcov">
          {!show?<div className="modalbox">
              <div><img src={close} onClick={()=>setShow(!show)} className="close"/></div>
              <div className="sub"><div className="num2">00</div><Link to="/" style={{textDecoration:"none", color:'white'}}>HOME</Link></div>
              <div className="sub"><div className="num2">01</div><Link to="destination"style={{textDecoration:"none", color:'white'}} >DESTINATION</Link></div>
              <div className="sub"><div className="num2">02</div><Link to="crew" style={{textDecoration:"none", color:'white'}}>CREW</Link></div>
              <div className="sub"><div className="num2">03</div><Link to="technology"style={{textDecoration:"none", color:'white'}} >TECHNOLOGY</Link></div>
           </div>:null}
        </div>
        <Outlet/>
      </div>
    )
}
export default Navbar