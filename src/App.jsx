
import './App.css';
import { Home } from './components/Home';
import { Details } from './components/Elements';
import {Routes, Route } from "react-router-dom"

function App() {
  return ( <>
    <div id='Navbar'> <em>Where in the world ?</em> <em>Dark Mode</em> </div>
    <div className="App">
      

      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route  path='/details/:name' element={<Details/>} />
      </Routes>
    </div>
  
  </>
  );
}

export default App;
