import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './wishlist.scss'
import { basketAdd } from '../BasketRedux/basketSlice';
import { wihlistDelete } from '../WishlistRedux/wishlistSlices';
import { GoTrash } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import axios from 'axios';
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { wihlsitAdd } from '../../toolkit/WishlistRedux/wishlistSlices';



export function WishlistPage() {
    const WishlistArr = useSelector((state) => state.wishlist.value)
    const dispatch = useDispatch()
    const navigate=useNavigate()

    const [card, setCard] = useState([])
    

    // const basketArr = useSelector((state) => state.basket.value)


    const baseUrl = 'http://localhost:4000/flash'

    async function fetchData() {
        const res = await axios.get(`${baseUrl}`)
        setCard(res.data)

    }
    useEffect(() => {
        fetchData()
    }, [])


    console.log(card);
    function handleRating(rating) {
        const arr = []
        const isQaliq = rating % 1
        let deyer = 0
        if (isQaliq) {
            rating -= 0.5
            deyer = 1
        }
        for (let i = 0; i < rating; i++) {
            arr.push(1)
        }
        if (isQaliq) {
            arr.push(2)
        }
        for (let i = 0; i < 5 - rating - deyer; i++) {
            arr.push(0)
        }
        return arr
    }
  
    return (
        <section id='wishlistPage'>
            <div className="wishlistUpBox">
                <div className="wishlistCountBox">
                  <div className="wishlistCount" style={{border:"none" , justifyContent:"start",fontSize:"26px"}}>
                  Wishlist ({WishlistArr.length})
                  </div>
                  <div className="moveBagBox"  onClick={()=>navigate("/")}>
                  Move All To Bag
                  </div>
                </div>
                <div className="wishlistCardBox">
                {
                        WishlistArr && WishlistArr.map((item)=>(
                            <div className='wishlistCard'>
                                <div className='cardImage'>
                                    <img src={item.image} alt="" />
                                    <div className="imgHoverBasketCard" onClick={()=>dispatch(basketAdd(item))}>
                                       <button ><IoCartOutline style={{fontSize:"25px"}} />Add to card</button>
                                    </div>
                                    <div className='ProductAdeteAndBtns'>
                                        <div className="abateBox">-{item.abate}%</div>
                                       <div className="cardBtns">
                                       <button onClick={()=>dispatch(wihlistDelete(item))}>
                                       <GoTrash  />
                                        </button>
                                       </div>
                                    </div>
                                </div>
                                <div className='cardText'>
                                    <h3>{item.name}</h3>
                                    <p className='price'>${item.newPrice} </p>
                                   

                                </div>
                            </div> 
                        ))
                    }
                </div>
            </div>
            <div className="wishlistDownBox">
            <div className="flashSalesUpBox">
                <div className="todaysText">
                    <div className='normalBox'></div>
                    <p>Just For You</p>
                   
                </div>
                <div className="seeAllBtn">
                        <p>See All</p>
                    </div>
            </div>
            <Swiper
                slidesPerView={5}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper2"
            >
                {card && card.map((item) => (
                    <>
                        <SwiperSlide>
                            <div className='card'>
                                <div className='cardImage'>
                                    <img src={item.image} alt="" />
                                    <div className="imgHoverBasketCard" onClick={()=>dispatch(basketAdd(item))}>
                                       <button ><IoCartOutline style={{fontSize:"25px"}} />Add to card</button>
                                    </div>
                                    <div className='ProductAdeteAndBtns'>
                                        <div className="abateBox">-{item.abate}%</div>
                                       <div className="cardBtns">
                                        <button><FaRegEye  /></button>
                                       </div>
                                    </div>
                                </div>
                                <div className='cardText'>
                                    <h3>{item.name}</h3>
                                    <p className='price'>${item.newPrice} <span>${item.oldPrice}</span></p>
                                    <p>
                                        {handleRating(item.rating).map(x => {
                                            if (x === 1) {
                                                return <i class="fa-solid fa-star" style={{color:"#FFAD33"}}></i>
                                            }
                                            else if (x === 2) {
                                                return <i class="fa-regular fa-star-half-stroke" style={{color:"#ffAD33"}}></i>
                                            }
                                            return <i class="fa-regular fa-star"style={{color:"gray"}}></i>

                                        })}


                                        <span>({item.comment})</span>
                                    </p>

                                </div>
                            </div>
                        </SwiperSlide>

                    </>
                ))}
            </Swiper>
            </div>
            {/* <button onClick={()=>dispatch(wihlistDeleteAll())}>alldelete</button>
           <p>{WishlistArr.length}</p>
            <div>
                {
                    WishlistArr && WishlistArr.map((item) =>
                    <>
                     <p>{item.name}</p>
                     <button onClick={()=>dispatch(wihlistDelete(item))}>delete</button>
                    <button onClick={()=>dispatch(basketAdd(item))}>Add basket</button>
                    </>
    )}
            </div> */}
        </section>  
    )
}
