import React from 'react';
import "./Sidebar.css";

import {IoMdHome} from "react-icons/io"
import {MdVideoLibrary} from "react-icons/md"
import {MdOutlineSubscriptions} from "react-icons/md"
import {MdOutlineSlowMotionVideo} from "react-icons/md"



const Sidebar = () => {
  return (
     <div className="sidebar-menu">
        <div className="sidebar-menu-logo">
            <IoMdHome/>
            <span>Home</span>
        </div>

        <div className="sidebar-menu-logo">
            <MdOutlineSlowMotionVideo/>
            <span>Shorts</span>
        </div>

        <div className="sidebar-menu-logo">
            <MdOutlineSubscriptions/>
            <span>Subscription</span>
        </div>

        <div className="sidebar-menu-logo">
            <MdVideoLibrary/>
            <span>Library</span>
        </div>

        
     </div>
  )
}

export default Sidebar