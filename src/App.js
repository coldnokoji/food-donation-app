import React, {useState, useEffect} from 'react';
import Home from './page/Home';
import Signup from './page/Signup';
import Login from './page/Login';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Donate from './page/Donate';
 
function App() {
 
  return (
    <Router>
      <div>
        <section>                              
            <Routes>                                                                        
                <Route path="/" element={<Home/>}/>
               <Route path="/signup" element={<Signup/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/donate" element={<Donate/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;