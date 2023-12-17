
import './App.css'
import {BrowserRouter ,Routes , Route } from "react-router-dom";
import Navbar from './layout/Navbar';
import HomePage from './page/HomePage'
import ContactPage from './page/ContactPage'
import AboutPage from './page/AboutPage'
import SignUpPage from './page/SignUpPage'
import ErrorPage from './page/ErrorPage';
import Footer from './layout/Footer';
import LogIn from './page/LogInPage/idnex';
import Account from './page/AccountPage';

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
        <Route path="/*" element={<ErrorPage/>} /> 
        <Route path="/logIn" element={<LogIn/>} /> 
        <Route path="/account" element={<Account/>} /> 
      </Routes>
   </BrowserRouter>
   <Footer/>
   </>
  )
}

export default App
