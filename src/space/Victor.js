import React from "react";
import './Victor.css'
import vicpic from './space-tourism-website-main/starter-code/assets/crew/image-victor-glover.png'

const Victor=()=>{

    return(
        <div className="vicov">
           <div className="vgcard">
                <div className="vgcards">
                   <div className="vg1">PILOT</div>
                   <div className="vg2">VICTOR GLOVER</div>
                   <div className="vg3">Pilot on the first operational flight of the SpaceX Crew Dragon to the 
  International Space Station. Glover is a commander in the U.S. Navy where 
  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
  station systems flight engineer. </div>
                </div>

                <div className="vgcards"><img src={vicpic} className="vicpic"/></div>
            </div>
        </div>
    )
}
export default Victor