import React from 'react';
import NavBar from './navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './home';
import About from './about'
import Service from './service'



const Fun = ()=>{
    
    return(
<div>
<NavBar />
<BrowserRouter >

<Routes>
   <Route exact path ='/Home' element={<Home />}/>
   <Route path ='/About' element={<About />}/>
   <Route path ='/Service' element={<Service />}/>

</Routes>

</BrowserRouter>

        </div>
    )
    
    
    }




export default Fun;