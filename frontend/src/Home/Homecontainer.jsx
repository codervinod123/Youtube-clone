import React from 'react'
import "./Homecontainer.css";
import Category from '../category/Category'
import Vedio from '../vedio/Vedio';

const Homecontainer = () => {
  return (
      <div className="home-screen">
         <Category/>
         {
            [...new Array(1)].map(()=>{
              return(
                <Vedio/>
              )
            })
         }
      </div>
  )
}

export default Homecontainer