import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './exploreOurProductSection.scss';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { basketAdd } from '../../toolkit/BasketRedux/basketSlice';
import { wihlsitAdd } from '../../toolkit/WishlistRedux/wishlistSlices';
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";

function ExploreOurProductSection() {
    const [card, setCard] = useState([])
    const [cardTwo, setCardTwo] = useState([])
    const baseUrl = 'http://localhost:4000/exploreOne'
    const baseUrlTwo = 'http://localhost:4000/exploreTwo'

    const basketArr=useSelector(state=>state.basket.value)
    const wishlistArr=useSelector(state=>state.wishlist.value)
    const dispatch=useDispatch()

    async function fetchData() {
        const res = await axios.get(`${baseUrl}`)
        setCard(res.data)

    }
    useEffect(() => {
        fetchData()
    }, [])

    async function fetchDataTwo() {
        const res = await axios.get(`${baseUrlTwo}`)
        setCardTwo(res.data)

    }
    useEffect(() => {
        fetchDataTwo()
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
    <section id='exploreOurProductSection'>
        <div className="exploreOurProductUpBox">
                <div className="todaysText">
                    <div className='normalBox'></div>
                    <p>Our Products</p>
                </div>
                <div className='salesTimer'>
                  <h1>Explore Our Products</h1>
                </div>
        </div>
        <div className="exploreOurProductMiddleBox">
        <div className="exploreOurProductDown">
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
                                        <div className="abateBox" style={{opacity:"0"}}></div>
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
                                    <p className='price' style={{display:"flex", gap:"10px"}}>${item.newPrice} 
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
                                       </p>


                                        <span>({item.comment})</span>
                                    </p>

                                </div>
                            </div>
                        </SwiperSlide>

                    </>
                ))}
            </Swiper>
        </div>
        <div className="exploreOurProductDown">
            <Swiper
                slidesPerView={5}
                // spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper2"
            >
                {cardTwo && cardTwo.map((item) => (
                    <>
                        <SwiperSlide>
                            <div className='card'>
                                <div className='cardImage'>
                                    <img src={item.image} alt="" />
                                    <div className="imgHoverBasketCard"  onClick={()=>dispatch(basketAdd(item))}>
                                       <button>Add to card</button>
                                    </div>
                                    <div className='ProductAdeteAndBtns'>
                                        <div className="abateBox" style={{opacity:"0"}}></div>
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
                                    <p className='price' style={{display:"flex", gap:"10px"}}>${item.newPrice} 
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
                                       </p>


                                        <span>({item.comment})</span>
                                    </p>

                                </div>
                            </div>
                        </SwiperSlide>

                    </>
                ))}
            </Swiper>
        </div>
        </div>
        <div className="exploreOurProductDownBox">
            <Link><button>View All Products</button></Link>

        </div>

    </section>
  )
}

export default ExploreOurProductSection