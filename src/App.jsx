
import './App.css';
import { useEffect, useState } from 'react';
import { Home } from './components/Home';
import { Details } from './components/Country-detail';
import {Routes, Route } from "react-router-dom"

function App() {

  const [mode , setMode ] = useState("dark") ;

  useEffect(()=>{

    if(mode==="light"){
      document.getElementById("app").style.backgroundColor="hsl(207, 26%, 17%)"
     
      document.getElementById("app").style.color="white"
      
    }

    else{
        
      document.getElementById("app").style.backgroundColor="hsl(0, 0%, 98%)";
      document.getElementById("app").style.color="black"
    }

  },[mode])

    function changeMode (){
      
      mode==="light"? setMode("dark"):setMode("light")
     
    }

  return ( < div id="app" >
    <div id='Navbar'> <em>Where in the world ?</em> <em onClick={changeMode}>Dark Mode</em> </div>
    <div className="App">
      

      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route  path='/details/:name' element={<Details/>} />
      </Routes>
    </div>
  
  </div>
  );
}

export default App;
