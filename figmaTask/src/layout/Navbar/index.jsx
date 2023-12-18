import React from 'react'
import './navbar.scss'
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux'

function Navbar() {
    const basketArr = useSelector((state) => state.basket.value)
    const WishlistArr = useSelector((state) => state.wishlist.value)

    const navigate=useNavigate()
  return (
    <nav className='Navbar'>
        <div className="navbarLogo">
            <h1>Exclusive</h1>
        </div>
        <div className="navbarRoute">
            <ul>
                <li>
                <Link className='link' to={"/"}>Home</Link>
                </li>
                <li>
                <Link className='link' to={"/contact"}>Contact</Link>
                </li>
                <li>
                <Link className='link' to={"/about"}>About</Link>
                </li>
                <li>
                <Link className='link' to={"/signUP"}>Sign Up</Link>
                 </li>
            </ul>
        </div>
        <div className="navbarReduxBox">
            <div  className='navbarInputBox'>
            <input type="text" placeholder='What are you looking for?' />
            <button><IoIosSearch /></button>
            </div>
            <button onClick={()=>navigate("/wishlist")}>
                <IoIosHeartEmpty />
           <div className='wishlistCount'>{WishlistArr.length}</div>
                </button>
            <button onClick={()=>navigate("/basket")}>
            <PiShoppingCartLight  />
            <div className='basketCount'>{basketArr.length}</div>
            </button>
        </div>
    </nav>
  )
}

export default Navbar