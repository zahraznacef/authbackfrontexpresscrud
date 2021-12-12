import React from 'react'
import Slider from '../Components/Slider'

const Home = () => {

   return (
      <div>
         <Slider />
         <h1>Home page</h1>

         <div className="home-widget">
            <div className="tabs">
               <li className="tabs-li">
                  <p className="tabs-p">Neuf</p>
               </li>
               <li className="tabs-li tabs-li-active">
                  <p className="tabs-p">Occasion</p>
               </li>
            </div>
            <div className="tabs-content">
               
            </div>
         </div>
      </div>
   )
}

export default Home
