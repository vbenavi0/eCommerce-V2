import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './Home';
import Contact from './Contact';
import Apparel from './Apparel';
import Collectibles from './Collectibles';
import Electronics from './Electronics';
import Sneakers from './Sneakers';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path = "/" element={<Home/>}></Route>
            <Route path = "/contact" element={<Contact/>}></Route>
            <Route path = "/apparel" element={<Apparel/>}></Route>
            <Route path = "/collectibles" element={<Collectibles/>}></Route>
            <Route path = "/electronics" element={<Electronics/>}></Route>
            <Route path = "/sneakers" element={<Sneakers/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
