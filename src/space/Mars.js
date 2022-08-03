import React from "react";
import './Mars.css'
import { Outlet, Link } from "react-router-dom";
import marspic from './space-tourism-website-main/starter-code/assets/destination/image-mars.png'
const Mars = ()=>{

    return(
        <div className="marscov">
           
           <div className="marscard">
            <div className="marscards" id="marsey"><img src={marspic} className="marspic"/></div>

            <div className="marscards" id="marsey2" >
               <div className="mfest">MARS</div>
               <div className="msekund">Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
  the tallest planetary mountain in our solar system. It’s two and a half times 
  the size of Everest!</div>
               <div className="mthed"></div>
               <div className="mfurth">
                  <div className="mfurther">
                    <div className="mlil">AVG. DISTANCE</div>
                    <div className="mbig">225 MIL. KM</div>
                  </div>

                  <div classname="mfurther">
                  <div className="mlil">EST. TRAVEL TIME</div>
                    <div className="mbig">9 MONTHS</div>
                  </div>
               </div>
            </div>
            </div>
        
        </div>
    )
}
export default Mars