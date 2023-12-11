
import './App.css'
import {BrowserRouter ,Routes , Route } from "react-router-dom";
import Navbar from './layout/Navbar';
import HomePage from './page/HomePage'
import ContactPage from './page/ContactPage'
import AboutPage from './page/AboutPage'
import SignUpPage from './page/SignUpPage'

function App() {

  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
        <Route path="/" element={<HomePage />}/> 
        <Route path="/contact" element={<ContactPage/>} /> 
        <Route path="/about" element={<AboutPage/>} /> 
        <Route path="/signUp" element={<SignUpPage/>} /> 
      </Routes>
   </BrowserRouter>
   
   </>
  )
}

export default App
