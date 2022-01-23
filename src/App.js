import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'




import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import User from './components/User'



const App = () => {
  return (
    <Router>
          <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/user/:name?"  element={<User/>}/>
          
   
        </Routes>
    
    </Router>
  );
}

export default App;