import React from "react"
import './Crew.css'
import crewmobile from './space-tourism-website-main/starter-code/assets/crew/background-crew-mobile.jpg'
import crewbg from './space-tourism-website-main/starter-code/assets/crew/background-crew-desktop.jpg'
import { Outlet, Link } from "react-router-dom"
import { useRef, useEffect } from "react"


const Crew = ()=>{
   const dog = useRef(null)
   const mak = useRef(null)
   const vic = useRef(null)
   const ano = useRef(null)


   useEffect(()=>{

      dog.current.style.backgroundColor="white"
      mak.current.addEventListener('click', function(){
         mak.current.style.backgroundColor=" white"
         dog.current.style.backgroundColor=" rgba(255, 255, 255, 0.363)"
         vic.current.style.backgroundColor=" rgba(255, 255, 255, 0.363)"
         ano.current.style.backgroundColor=" rgba(255, 255, 255, 0.363)"
       })
       vic.current.addEventListener('click', function(){
         vic.current.style.backgroundColor=" white"
         dog.current.style.backgroundColor=" rgba(255, 255, 255, 0.363)"
         mak.current.style.backgroundColor=" rgba(255, 255, 255, 0.363)"
         ano.current.style.backgroundColor=" rgba(255, 255, 255, 0.363)"
       })
       ano.current.addEventListener('click', function(){
         ano.current.style.backgroundColor=" white"
         dog.current.style.backgroundColor=" rgba(255, 255, 255, 0.363)"
         mak.current.style.backgroundColor=" rgba(255, 255, 255, 0.363)"
         vic.current.style.backgroundColor=" rgba(255, 255, 255, 0.363)"
       })
       dog.current.addEventListener('click', function(){
         dog.current.style.backgroundColor=" white"
         vic.current.style.backgroundColor=" rgba(255, 255, 255, 0.363)"
         mak.current.style.backgroundColor=" rgba(255, 255, 255, 0.363)"
         ano.current.style.backgroundColor=" rgba(255, 255, 255, 0.363)"
       })
   }, [])

    return(
       <div className="crewcov">
        <img src={crewbg} className="crewbg"/>
        <img src={crewmobile} className="crewmobile"/>
        <div className="cblock"><div id="cun">02</div>MEET YOUR CREW</div>

          <div className="crewcir">
           <Link to="/crew"> <div ref={dog} className="crewcircle"></div></Link>
           <Link to="/crew/mark"> <div ref={mak} className="crewcircle"></div></Link>
           <Link to="/crew/victor"> <div ref={vic} className="crewcircle"></div></Link>
           <Link to="/crew/anusheh"> <div ref={ano} className="crewcircle"></div></Link>
          </div>
          
         
          <Outlet/>
       </div>
    )
}
export default Crew