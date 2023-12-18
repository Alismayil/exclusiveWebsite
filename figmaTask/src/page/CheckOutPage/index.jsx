import React from 'react'
import './checkOut.scss'
import { useSelector } from 'react-redux'

function CheckOutPage() {
    const CheckOutArr=useSelector((state) => state.basket.value)
    
  let subTotal=0
  CheckOutArr.map((product)=>(
    subTotal += parseInt(product.total)
  ))

  return (
    <section id='checkOutPage'>
    <p>subtotal:{subTotal}</p>
    <p>product:{CheckOutArr.length}</p>
        {
            CheckOutArr && CheckOutArr.map((item)=>(
                <div className="checkOutCard">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.newPrice}</p>
             </div>
            ))
        }
    </section>
  )
}

export default CheckOutPage