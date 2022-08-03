import React from "react";
import './Moon.css'
import moonpic from './space-tourism-website-main/starter-code/assets/destination/image-moon.png'
const Moon = ()=>{

    return(
        <div className="mooncov">
            <div className="mooncard">
            <div className="mooncards" id="mooney"><img src={moonpic} className="moonpic"/></div>

            <div className="mooncards" id="mooney2" >
               <div className="fest">MOON</div>
               <div className="sekund">See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
  regain perspective and come back refreshed. While you’re there, take in some history 
  by visiting the Luna 2 and Apollo 11 landing sites.</div>
               <div className="thed"></div>
               <div className="furth">
                  <div className="further">
                    <div className="lil">AVG. DISTANCE</div>
                    <div className="big">384,000 KM</div>
                  </div>

                  <div className="further">
                  <div className="lil">EST. TRAVEL TIME</div>
                    <div className="big">3 DAYS</div>
                  </div>
               </div>
            </div>
            </div>
        </div>
    )
}
export default Moon