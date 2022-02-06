import React from 'react';
// import {BrowserRouter,Router,Route} from 'react-router-dom';
// import Home from './home';
// import About from './about'
// import Service from './service'


const navBar =()=>{
    const myCoponent ={
     margin:"10px 20px"
      
    }
    return(
      
<div>

     <div className='right'>
         <div style={myCoponent} >
        <button className='ui button'><a href="/Home">Home</a></button>
         <button className='ui button'><a href="/Service">Service</a></button>
        <button className='ui button'><a href="/About">About</a></button>
        </div>
    </div>
     </div>
    )
}
export default navBar;