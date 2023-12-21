import React from 'react'
import './checkOut.scss'
import { useDispatch, useSelector } from 'react-redux'
import MasterCard from "../../images/masterCards.png"
import { couponAdd } from '../../toolkit/BasketRedux/CouponSlice'

function CheckOutPage() {
  const CheckOutArr = useSelector((state) => state.basket.value)
  const CouponArr = useSelector((state) => state.coupon.value)
  const dispatch = useDispatch()

  let subTotal = 0
  CheckOutArr.map((product) => (
    subTotal += parseInt(product.total)
  ))

  return (
    <section id='checkOutPage'>
      <div className="checkOutPageLeftBox">
        <h1>Billing Details</h1>
        <form action="">
          <div className="inputName">
            <p>First Name*</p>
            <input type="text" />
          </div>
          <div className="inputName">
            <p>Company Name</p>
            <input type="text" />
          </div>
          <div className="inputName">
            <p>Street Address*</p>
            <input type="text" />
          </div>
          <div className="inputName">
            <p>Apartment, floor, etc. (optional)</p>
            <input type="text" />
          </div>
          <div className="inputName">
            <p>Town/City*</p>
            <input type="text" />
          </div>
          <div className="inputName">
            <p>Phone Number*</p>
            <input type="number" />
          </div>
          <div className="inputName">
            <p>Email Address*</p>
            <input type="email" />
          </div>
          <div className="checkBoxDiv">
            <input type="checkbox" />
            <p>Save this information for faster check-out next time</p>
          </div>
        </form>
      </div>

      <div className="checkOutPageRightBox">
        <div className="boxUp">
          {
            CheckOutArr && CheckOutArr.map((item) => (
              <div className="checkOutCard">
                <div className="checkOutCardImgBox">
                  <img src={item.image} alt="" />
                </div>
                <div className="checkOutCardNameBox">
                  <p>{item.name}</p>
                </div>
                <div className="checkOutCardPriceBox">
                  <p>${item.newPrice}</p>
                </div>
                {/* <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.newPrice}</p> */}
              </div>
            ))
          }
        </div>
        <div className="boxMiddle">
          <div className="totalsBox">
            <p>Subtotal:</p>
            <p>${subTotal}</p>
          </div>
          <div className="totalsBox">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className="totalsBox" style={{ border: "none" }}>
            <p>Product:</p>
            <p>{CheckOutArr.length}</p>
          </div>
          <div className="radioBox">
            <div>
              <div className='inputAndTextBox'>
                <input type="radio" id="huey" name="drone" value="huey" checked />
                <p>Bank</p>
              </div>
              <img src={MasterCard} alt="" />
            </div>

            <div>
              <div className='inputAndTextBox'>
                <input type="radio" id="dewey" name="drone" value="dewey" />
                <p>Cash on delivery</p>
              </div>
            </div>



          </div>

        </div>
        <div className="boxDown">
          <div className="couponBoxUp">
            <input value={CouponArr[CouponArr.length-1]} onChange={(e)=>dispatch(couponAdd(e.target.value))}  type="text" placeholder='Coupon Code' />
            <div className="applyBtn">
              <p>Apply Coupon</p>
            </div>
          </div>
          <div className="couponBoxDown">
            <div className="placeBtn">
              <p>Place Order</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default CheckOutPage