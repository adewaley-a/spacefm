import React from "react"
import './Home.css'
import { Outlet,Link } from "react-router-dom"
import bghome from './space-tourism-website-main/starter-code/assets/home/background-home-mobile.jpg'
import bgdesktop from './space-tourism-website-main/starter-code/assets/home/background-home-desktop.jpg'
import { useRef } from "react"
import Navbar from "./Navbar"

const Home = (props)=>{
    const explore = useRef(null)
    return(
       <div className="homecov">
          <img src={bgdesktop} className="homebg"/>
          <img src={bghome} className="mobilebg"/>
          <div className="card">
             <div className="cards" id="first">
                <div className="text1"> SO, YOU WANT TO TRAVEL TO</div>
                <div className="text2">SPACE</div>
                <div className="text3"> Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!</div>
             </div>

             <div className="cards" id="second"><Link to = "/destination" style ={{textDecoration :"none", color:"black"}}>
               <div ref={explore} onClick={props.createborder} className="circle">EXPLORE</div></Link></div>
          </div>
       </div>
    )
}
export default Home