import React from "react";
import './Launch.css'
import launchmobile from './space-tourism-website-main/starter-code/assets/technology/image-launch-vehicle-landscape.jpg'
import launchpic from './space-tourism-website-main/starter-code/assets/technology/image-launch-vehicle-portrait.jpg'

const Launch=()=>{

    return(
        <div className="launchcov">
            <div className="launchcard">
                <div className="launchcards">
                    <div className="launch1">THE TERMINOLOGY..</div>
                    <div className="launch2">LAUNCH VEHICLE</div>
                    <div className="launch3">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
  payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
  it's quite an awe-inspiring sight on the launch pad!</div>
                </div>
               

                <div className="launchcards" id="launchid" ><img src={launchpic} className="launchpic"/>
                <img src={launchmobile} className="launchmobile"/>
                </div>
            </div>


            <img src={launchmobile} className="launchmobile"/>
            <div className="launchcov2">
           

            <div className="lun">THE TERMINOLOGY..</div>
            <div className="ldeux">LAUNCH VEHICLE</div>
            <div className="ltrois">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
  payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
  it's quite an awe-inspiring sight on the launch pad!</div>
            </div>
        </div>

       
    )
}
export default Launch