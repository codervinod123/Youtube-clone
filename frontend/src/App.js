import React from 'react'
import Header from './header/Header';
import Home from './screen/home/Home';
import Sidebar from './sidebar/Sidebar';

export const App = () => {
  return (
    <>
      <Header/>
      <div className="app_container">
        <Sidebar/>
        <div className="screen_container">
           <Home/>
        </div>
      </div>
    </>
  )
}
export default App;