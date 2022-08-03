import React from "react";
import './Spacep.css'
import ppic from './space-tourism-website-main/starter-code/assets/technology/image-spaceport-portrait.jpg'
import pmobile from './space-tourism-website-main/starter-code/assets/technology/image-spaceport-landscape.jpg'


const Spacep=()=>{

    return(
        <div className="pcov">

<div className="pcard">
                <div className="pcards">
                    <div className="p1">THE TERMINOLOGY..</div>
                    <div className="p2">SPACEPORT</div>
                    <div className="p3">A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
  by analogy to the seaport for ships or airport for aircraft. Based in the 
  famous Cape Canaveral, our spaceport is ideally situated to take advantage 
  of the Earth’s rotation for launch.</div>
                </div>


                <div className="pcards" id="pid" ><img src={ppic} className="ppic"/></div>
            </div>

            <img src={pmobile} className="pmobile"/>
            <div className="pcov2">
           

            <div className="pun">THE TERMINOLOGY..</div>
            <div className="pdeux">SPACEPORT</div>
            <div className="ptrois">A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
  by analogy to the seaport for ships or airport for aircraft. Based in the 
  famous Cape Canaveral, our spaceport is ideally situated to take advantage 
  of the Earth’s rotation for launch.</div>
            </div>

        </div>
    )
}
export default Spacep