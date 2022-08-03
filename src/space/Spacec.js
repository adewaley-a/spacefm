import React from "react";
import './Space.css'
import cpic from './space-tourism-website-main/starter-code/assets/technology/image-space-capsule-portrait.jpg'
import cmobile from './space-tourism-website-main/starter-code/assets/technology/image-space-capsule-landscape.jpg'


const Spacec=()=>{

    return(
        <div className="ccov">

<div className="ccard">
                <div className="ccards">
                    <div className="c1">THE TERMINOLOGY..</div>
                    <div className="c2">SPACE CAPSULE</div>
                    <div className="c3"> A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
  capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
  you'll spend your time during the flight. It includes a space gym, cinema, 
  and plenty of other activities to keep you entertained.</div>
                </div>


                <div className="ccards" id="cid" ><img src={cpic} className="cpic"/></div>
            </div>


            <img src={cmobile} className="cmobile"/>
            <div className="ccov2">
           

            <div className="cun">THE TERMINOLOGY..</div>
            <div className="cdeux">SPACE CAPSULE</div>
            <div className="ctrois"> A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
  capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
  you'll spend your time during the flight. It includes a space gym, cinema, 
  and plenty of other activities to keep you entertained.</div>
            </div>

        </div>
    )
}
export default Spacec