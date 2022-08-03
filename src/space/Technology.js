import React from "react"
import './Technology.css'
import { Outlet, Link } from "react-router-dom"
import { useRef, useEffect } from "react"
import techmobile from './space-tourism-website-main/starter-code/assets/technology/background-technology-mobile.jpg'
import techbg from './space-tourism-website-main/starter-code/assets/technology/background-technology-desktop.jpg'

const Technology = ()=>{
   const wan = useRef(null)
   const tu = useRef(null)
   const tri = useRef(null)

   useEffect(()=>{

      wan.current.style.backgroundColor="white"
      wan.current.style.color="black"
      tu.current.addEventListener('click', function(){
         tu.current.style.backgroundColor=" white"
         tu.current.style.color=" black"
         wan.current.style.backgroundColor=" rgb(255,255,255, 0.0)"
         wan.current.style.color="white"
         tri.current.style.backgroundColor=" rgb(255,255,255, 0.0)"
         tri.current.style.color="white"
       })
       tri.current.addEventListener('click', function(){
         tri.current.style.backgroundColor=" white"
         tri.current.style.color=" black"
         wan.current.style.backgroundColor=" rgb(255,255,255, 0.0)"
         wan.current.style.color="white"
         tu.current.style.backgroundColor="  rgb(255,255,255, 0.0)"
         tu.current.style.color="white"
       })
       wan.current.addEventListener('click', function(){
         wan.current.style.backgroundColor=" white"
         wan.current.style.color=" black"
         tri.current.style.backgroundColor=" rgb(255,255,255, 0.0)"
         tri.current.style.color="white"
         tu.current.style.backgroundColor="  rgb(255,255,255, 0.0)"
         tu.current.style.color="white"
       })
   }, [])
    return(
       <div className="techcov">
         <img src={techbg} className="techbg"/>
         <img src={techmobile} className="techmobile"/>
         <div className="tblock"><div id="tun">03</div>SPACE LAUNCH 101</div>

         <div className="circlink">
            <Link to = "/technology"style={{textDecoration:"none"}} ><div ref={wan} className="circlinks">1</div></Link>
            <Link to = "/technology/spacep" style={{textDecoration:"none"}}><div ref={tu} className="circlinks">2</div></Link>
            <Link to = "/technology/spacec" style={{textDecoration:"none"}}><div ref={tri} className="circlinks">3</div></Link>
         </div>
         <Outlet/>
       </div>
    )
}
export default Technology