import React from 'react';
import "./Vedio.css";

import banner from "./../assets/banner.png"


const Vedio = () => {
  return (
       <div className="vedio-container">

          <div className="vedio-poster">
             <img src={banner} alt="poster" />
             <span>5:09</span>
          </div>

          <div className="vedio-title">
             <img src="" alt="img" />
             <span>vedio description</span>
          </div>

          <div className="vedio-channel">
             
          </div>

          <div className="vedio-details">
            <span>Indian Politics</span>
            <span>views</span> 
          </div>

       </div>
   )
}

export default Vedio