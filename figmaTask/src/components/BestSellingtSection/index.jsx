import React, { useEffect, useState } from 'react'
import './bestSellingSection.scss'
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import axios from 'axios';
import { FaRegEye } from "react-icons/fa";
import Reklam from '../Reklam';
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { wihlsitAdd } from '../../toolkit/WishlistRedux/wishlistSlices';
import { useDispatch, useSelector } from 'react-redux';
import { basketAdd } from '../../toolkit/BasketRedux/basketSlice';

function BestSellingSection() {
    const [card, setCard] = useState([])


    const wishlistArr = useSelector((state) => state.wishlist.value)
    const basketArr = useSelector((state) => state.basket.value)
    const dispatch=useDispatch()

    const baseUrl = 'http://localhost:4000/selling/'

    async function fetchData() {
        const res = await axios.get(`${baseUrl}`)
        setCard(res.data)

    }
    useEffect(() => {
        fetchData()
    }, [])

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
        <section id='bestSellingSection'>
            <div className="browseCategoryUpBox">
                <div className='bestSellingTextBOx'>
                    <div className="todaysText">
                        <div className='normalBox'></div>
                        <p>This Month</p>
                    </div>
                    <div className='salesTimer'>
                        <h1>Best Selling Products</h1>
                    </div>
                </div>
                <div className='bestSellingBtnBox'>
                 <Link style={{textDecoration:"none"}}>
                 <div className='bestSellingBtn'>
                <p>View All</p>
                </div>  
                </Link> 
                </div>
            </div>
            <div className="bestSellingDown">
            <Swiper
                slidesPerView={5}
                // spaceBetween={30}
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
                                       <button >Add to card</button>
                                    </div>
                                    <div className='ProductAdeteAndBtns'>
                                        <div className="abateBox">-{item.abate}%</div>
                                       <div className="cardBtns">
                                       <button onClick={()=>dispatch(wihlsitAdd(item))}>
                                        {
                                            wishlistArr.find(x=>x._id === item._id) ? <FaHeart style={{color:"#DB4444"}} /> : <FaRegHeart />
                                        }
                            </button>
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
            <Reklam/>
        </section>
    )
}

export default BestSellingSection