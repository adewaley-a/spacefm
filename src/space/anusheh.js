import React from "react";
import './Anusheh.css'
import anupic from './space-tourism-website-main/starter-code/assets/crew/image-anousheh-ansari.png'

const Anusheh=()=>{

    return(
        <div className="anucov">
             <div className="anucard">
                <div className="anucards">
                   <div className="anu1">FLIGHT ENGINEER</div>
                   <div className="anu2">ANOUSHEH ANSARI</div>
                   <div className="anu3"> Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
  Ansari was the fourth self-funded space tourist, the first self-funded woman to 
  fly to the ISS, and the first Iranian in space. </div>
                </div>

                <div className="anucards"><img src={anupic} className="anupic"/></div>
            </div>
        </div>
    )
}
export default Anusheh