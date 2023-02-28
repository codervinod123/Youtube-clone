import React,{useState} from 'react';
import "./Header.css";

import {BsYoutube} from "react-icons/bs"
import {AiOutlineMenu} from "react-icons/ai"
import {FiSearch} from "react-icons/fi"
import {MdVideoCall} from "react-icons/md"
import {IoMdNotifications} from "react-icons/io"
import userimage from "../assets/image1.jpg";



const Header = () => {

  const [inputValue, setInputValue] = useState("");
   
  const handleChange=(e)=>{
     e.preventDefault();
     setInputValue(e.target.value);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputValue);
  }

  return (
    <div className='header_container'>
       <div className="logo-menu">
         <AiOutlineMenu/>
         <div className="logo-name">
          <BsYoutube/><span>YouTube</span><sup>IN</sup>
         </div>
       </div>
      
       <div className="searchbar">
         <form onSubmit={(e)=>handleSubmit(e)}>
           <input type="text" placeholder='Search' onChange={(e)=>handleChange(e)} />
           <button type='submit'><FiSearch/></button>
         </form>
       </div>

       <div className="profile-menu">
         
           <div>
              <MdVideoCall/>
           </div>
           
           <div>
             <IoMdNotifications/>
           </div>
           
           <div>
             <img src={userimage} alt="user_image" />
           </div>
         
       </div>


    </div>
  )
}

export default Header