import React from 'react'
import './basketEmptySection.scss'
import { FaCartPlus } from "react-icons/fa";

function BasketEmptySection() {
  return (
    <section id='basketEmptySection'>
<FaCartPlus  style={{fontSize:"200px", color:"#DB4444"}}/>
    <h1 style={{fontSize:"30px", marginLeft:"30px"}}>Empty</h1>
    </section>
  )
}

export default BasketEmptySection