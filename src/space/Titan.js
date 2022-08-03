import React from "react";
import './Titan.css'
import titanpic from './space-tourism-website-main/starter-code/assets/destination/image-titan.png'
const Titan = ()=>{

    return(
        <div className="titancov">
           
           <div className="titancard">
            <div className="titancards" id="titany"><img src={titanpic} className="titanpic"/></div>

            <div className="titancards" id="titany2" >
               <div className="tfest">TITAN</div>
               <div className="tsekund"> The only moon known to have a dense atmosphere other than Earth, Titan 
  is a home away from home (just a few hundred degrees colder!). As a 
  bonus, you get striking views of the Rings of Saturn.
</div>
               <div className="tthed"></div>
               <div className="tfurth">
                  <div className="tfurther">
                    <div className="tlil">AVG. DISTANCE</div>
                    <div className="tbig">1.6 BIL. KM</div>
                  </div>

                  <div classname="tfurther">
                  <div className="tlil">EST. TRAVEL TIME</div>
                    <div className="tbig">7 YEARS</div>
                  </div>
               </div>
            </div>
            </div>


        </div>
    )
}
export default Titan