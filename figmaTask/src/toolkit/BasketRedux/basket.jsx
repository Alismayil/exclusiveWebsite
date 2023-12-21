import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import './basket.scss'
import { basketDecrement, basketDelete, basketDeleteAll, basketIncrement } from './basketSlice';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import BasketEmptySection from '../../components/BasketEmptySection';
import { couponAdd } from './CouponSlice';

export function BasketPage() {

  const CouponArr = useSelector((state) => state.coupon.value)

  const basketArr = useSelector((state) => state.basket.value)
  const dispatch = useDispatch()
  const navigate = useNavigate()



  let subTotal = 0
  basketArr.map((product) => (
    subTotal += parseInt(product.total)
  ))


  return (
    <div className='basket'>
      <div className="basketUp">
        {
          basketArr.length === 0 ? <></> :
            <div className="basketCardUpperBox">
              <div className="basketImgBox">Product</div>
              <div className="basketPriceBox">Price</div>
              <div className="basketQuantityBox">Quantity</div>
              <div className="basketSubtotalBox">Subtotal</div>
            </div>
        }

        {
          basketArr.length === 0 ? <BasketEmptySection /> : ''
        }
        {
          basketArr && basketArr.map((item) => (
            <div className="basketCard">
              <div className="basketImgBox">
                <div className="imgBox">
                  <img src={item.image} alt="" />
                  <div className="deleteBtn" onClick={() => dispatch(basketDelete(item))}>
                    <IoCloseSharp />
                  </div>
                </div>
                <div className="nameBox">
                  {item.name}
                </div>
              </div>
              <div className="basketPriceBox">${item.newPrice}</div>
              <div className="basketQuantityBox">
                <div className="QuantityBox">
                  <div className="countBox"> <p>{item.count}</p></div>
                  <div className="countBtnBox">
                    <button onClick={() => dispatch(basketIncrement(item))} >
                      <IoIosArrowUp />
                    </button>
                    <button onClick={() => dispatch(basketDecrement(item))} >
                      <IoIosArrowDown />
                    </button>
                  </div>
                </div>
              </div>
              <div className="basketSubtotalBox"><p>${item.total}</p></div>
            </div>
          ))
        }

      </div>
      <div className="basketDown">
        <div className="basketUpReturnBox">
          <div className="returnBox" onClick={() => navigate("/")}>
            <p>Return To Shop</p>
          </div>
          {
            basketArr.length === 0 ? <></> :
              <div className="updateCardBox" onClick={() => dispatch(basketDeleteAll())}>
                <p>Update Cart</p>
              </div>
          }

        </div>
        {
          basketArr.length === 0 ? <div style={{ height: "0px" }}></div> :
            <div className="basketDownCouponBox">
              <div className="basketDownCouponBoxLeft">
                <input value={CouponArr[CouponArr.length-1]} onChange={(e) => dispatch(couponAdd(e.target.value))} type="text" placeholder='Coupon Code' />
                <div className="couponbtn">
                  <p>Apply Coupon</p>
                </div>
              </div>
              <div className="basketDownCouponBoxRight">
                <div className="cardTotalBox">
                  <div className="cardTotalUpBox">
                    <h3>Cart Total</h3>
                  </div>
                  <div className="cardTotalMiddleBox">
                    <p>Subtotal:</p>
                    <p>{subTotal}$</p>
                  </div>
                  <div className="cardTotalMiddleBox">
                    <p>Shipping:</p>
                    <p>Free</p>
                  </div>
                  <div className="cardTotalMiddleBox" style={{ border: "none" }}>
                    <p>Product:</p>
                    <p>{basketArr.length}</p>
                  </div>
                  <div className="cardTotalDownBox">
                    <div className="proceesBtn" onClick={() => navigate("/checkOut")}>Procees to checkout</div>
                  </div>
                </div>
              </div>
            </div>
        }

      </div>
    </div>
  )
}