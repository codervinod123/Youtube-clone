import React from 'react'
import "./App.css";
import Category from './category/Category';
import Header from './header/Header';
import Homecontainer from './Home/Homecontainer';
import Sidebar from './sidebar/Sidebar';

export const App = () => {
  return (
    <>
      <Header/>
      <div className="app-container">
          <Sidebar/>
          <div className="home-container">
              <Homecontainer/>
          </div>
      </div>
    </>
  )
}
export default App;