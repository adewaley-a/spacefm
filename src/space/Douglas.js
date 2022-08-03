import React from "react";
import './Douglas.css'
import dougpic from './space-tourism-website-main/starter-code/assets/crew/image-douglas-hurley.png'
import { Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import mvicpic from './space-tourism-website-main/starter-code/assets/crew/image-victor-glover.png'
import mmarkpic from './space-tourism-website-main/starter-code/assets/crew/image-mark-shuttleworth.png'
import manupic from './space-tourism-website-main/starter-code/assets/crew/image-anousheh-ansari.png'

const Douglas=()=>{

    return(
        <div className="dougcov">
            <div className="dgcard">
                <div className="dgcards">
                   <div className="dg1">COMMANDER</div>
                   <div className="dg2">DOUGLAS HURLEY</div>
                   <div className="dg3">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
  and former NASA astronaut. He launched into space for the third time as 
  commander of Crew Dragon Demo-2.</div>
                </div>

                <div className="dgcards"><img src={dougpic} className="dougpic"/></div>
            </div>

           <Swiper 
           modules = {[Pagination]}
           pagination = {{clickable:true}}
           >
               
             <SwiperSlide className="rec">
                <div>
                   <div className="recs" id="dgid"><img src={dougpic} className="dougpic"/></div>
                   <div className="recs" id="blurry">

                   <div className="rg1">COMMANDER</div>
                   <div className="rg2">DOUGLAS HURLEY</div>
                   <div className="rg3">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                   and former NASA astronaut. He launched into space for the third time as 
                   commander of Crew Dragon Demo-2.</div>

                   </div> 
                </div>
             </SwiperSlide>

             <SwiperSlide className="rec">
                <div>
                   <div className="recs" id="dgid"><img src={mmarkpic} className="mmarkpic"/></div>
                   <div className="recs" id="blurry">

                   <div className="rg1">MISSION SPECIALIST</div>
                   <div className="rg2">MARK SHUTTLEWORTH</div>
                   <div className="rg3">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
  the Linux-based Ubuntu operating system. Shuttleworth became the first South 
  African to travel to space as a space tourist.</div>

                   </div> 
                </div>
             </SwiperSlide>

             <SwiperSlide className="rec">
                <div>
                   <div className="recs" id="dgid"><img src={mvicpic} className="mvicpic"/></div>
                   <div className="recs" id="blurry">

                   <div className="rg1">PILOT</div>
                   <div className="rg2">VICTOR GLOVER</div>
                   <div className="rg3">Pilot on the first operational flight of the SpaceX Crew Dragon to the 
  International Space Station. Glover is a commander in the U.S. Navy where 
  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
  station systems flight engineer.</div>

                   </div> 
                </div>
             </SwiperSlide>

             <SwiperSlide className="rec">
                <div>
                   <div className="recs" id="dgid"><img src={manupic} className="manupic"/></div>
                   <div className="recs" id="blurry">

                   <div className="rg1">FLIGHT ENGINEER</div>
                   <div className="rg2">ANOUSHEH ANSARI</div>
                   <div className="rg3"> Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
  Ansari was the fourth self-funded space tourist, the first self-funded woman to 
  fly to the ISS, and the first Iranian in space.</div>

                   </div> 
                </div>
             </SwiperSlide>

             

           </Swiper>
        </div>
    )
}
export default Douglas