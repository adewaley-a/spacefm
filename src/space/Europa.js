import React from "react";
import './Europa.css'
import europic from './space-tourism-website-main/starter-code/assets/destination/image-europa.png'
const Europa = ()=>{

    return(
        <div className="europacov">
           
           <div className="eurocard">
            <div className="eurocards" id="europey"><img src={europic} className="europic"/></div>

            <div className="eurocards" id="europey2" >
               <div className="efest">EUROPA</div>
               <div className="esekund">The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
  winter lover’s dream. With an icy surface, it’s perfect for a bit of 
  ice skating, curling, hockey, or simple relaxation in your snug 
  wintery cabin.</div>
               <div className="ethed"></div>
               <div className="efurth">
                  <div className="efurther">
                    <div className="elil">AVG. DISTANCE</div>
                    <div className="ebig">628 MIL. KM</div>
                  </div>

                  <div classname="efurther">
                  <div className="elil">EST. TRAVEL TIME</div>
                    <div className="ebig">3 YEARS</div>
                  </div>
               </div>
            </div>
            </div>

        </div>
    )
}
export default Europa