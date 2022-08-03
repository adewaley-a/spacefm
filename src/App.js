import React from 'react';
import logo from './logo.svg';
import Navbar from './space/Navbar';
import Home from './space/Home';
import Destination from './space/Destination';
import Crew from './space/Crew';
import Technology from './space/Technology';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Moon from './space/Moon';
import Mars from './space/Mars';
import Europa from './space/Europa';
import Titan from './space/Titan';
import Douglas from './space/Douglas';
import Mark from './space/Mark';
import Victor from './space/Victor';
import Anusheh from './space/anusheh';
import Launch from './space/Launch';
import Spacep from './space/Spacep';
import Spacec from './space/Spacec';
import Swiper, {Navigation, Pagination} from "swiper"


function App() {
  return (
    <div className="appcover">
    <BrowserRouter>
      <Routes >
        <Route path = "/"  element={<Navbar/>}>
          <Route index element = {<Home/>}/>
          
          <Route path = "destination" element={<Destination/>}>
          
     
         
          <Route index element={<Moon/>}/>
          <Route path="/destination/europa" element={<Europa/>}/>
          <Route path="/destination/titan" element={<Titan/>}/>
          <Route path="/destination/mars" element={<Mars/>}/>
         
         
       
  
          </Route>
            

          <Route path = "/crew" element ={<Crew/>}>

             <Route index element ={<Douglas/>}/>
             <Route path="/crew/mark" element={<Mark/>}/>
             <Route path="/crew/victor" element={<Victor/>}/>
             <Route path="/crew/anusheh" element={<Anusheh/>}/>
          </Route>


          <Route path = "/technology" element ={<Technology/>}>

             <Route index element = {<Launch/>}/>
             <Route path = "/technology/spacep" element = {<Spacep/>}/>
             <Route path = "/technology/spacec" element = {<Spacec/>}/>
          </Route>


        </Route>
      </Routes>
    </BrowserRouter>

    
    
   
    </div>
  );
}

export default App;
