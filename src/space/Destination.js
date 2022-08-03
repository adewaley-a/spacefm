import React from "react"
import './Destination.css'
import bgdesktop from './space-tourism-website-main/starter-code/assets/destination/background-destination-desktop.jpg'
import { Outlet, Link } from "react-router-dom"
import destimobile from './space-tourism-website-main/starter-code/assets/destination/background-destination-mobile.jpg'
import { useRef, useEffect } from "react"

const Destination = ()=>{

    const moon= useRef(null)
    const mars= useRef(null)
    const europa= useRef(null)
    const titan= useRef(null)

    useEffect(()=>{
        moon.current.style.borderBottom=" 3px solid white"
        mars.current.addEventListener('click', function(){
            mars.current.style.borderBottom=" solid white"
            moon.current.style.borderBottom=" none"
            europa.current.style.borderBottom=" none"
            titan.current.style.borderBottom=" none"  
          })
          europa.current.addEventListener('click', function(){
            europa.current.style.borderBottom=" solid white"
            moon.current.style.borderBottom=" none"
            mars.current.style.borderBottom=" none"
            titan.current.style.borderBottom=" none"  
          })
          titan.current.addEventListener('click', function(){
            titan.current.style.borderBottom=" solid white"
            moon.current.style.borderBottom=" none"
            europa.current.style.borderBottom=" none"
            mars.current.style.borderBottom=" none"  
          })
          moon.current.addEventListener('click', function(){
            moon.current.style.borderBottom=" solid white"
            mars.current.style.borderBottom=" none"
            europa.current.style.borderBottom=" none"
            titan.current.style.borderBottom=" none"  
          })
    },[])

    return(
       <div className="destcov">
        <img src={bgdesktop} className="destibg"/>
        <img src={destimobile} className="destimobile"/>
        <div className="block"><div id="un">01</div>PICK YOUR DESTINATION</div>

        <div className="descard">
            <div className="descards"></div>
            <div className="descards">
                <div className="bar">
                    <div ref={moon}  className="bars"><Link to ="/destination" style={{textDecoration:"none", color:'#e6e3ff'}}>MOON</Link></div>
                    <div  ref={mars} className="bars"><Link to ="/destination/mars" style={{textDecoration:"none", color:'#e6e3ff'}}>MARS</Link></div>
                    <div ref={europa} className="bars"><Link  to ="/destination/europa" style={{textDecoration:"none", color:'#e6e3ff'}}>EUROPA</Link></div>
                    <div ref={titan} className="bars"><Link   to ="/destination/titan"style={{textDecoration:"none", color:'#e6e3ff'}} >TITAN</Link></div>
                </div>
            </div>
        </div>

 

        <Outlet/>
       </div>
    )
}
export default Destination