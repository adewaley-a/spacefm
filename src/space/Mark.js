import React from "react";
import './Mark.css'
import markpic from './space-tourism-website-main/starter-code/assets/crew/image-mark-shuttleworth.png'

const Mark=()=>{

    return(
        <div className="markcov">
           <div className="mkcard">
                <div className="mkcards">
                   <div className="mk1">MISSION SPECIALIST</div>
                   <div className="mk2">MARK SHUTTLEWORTH</div>
                   <div className="mk3">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
  the Linux-based Ubuntu operating system. Shuttleworth became the first South 
  African to travel to space as a space tourist.</div>
                </div>

                <div className="mkcards"><img src={markpic} className="markpic"/></div>
            </div>
        </div>
    )
}
export default Mark