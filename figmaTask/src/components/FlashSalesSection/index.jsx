import React, { useEffect, useState } from 'react'
import './flashSales.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import axios from 'axios';
import { FaRegEye } from "react-icons/fa";
import Timer from '../Time/iindex';
import { basketAdd } from '../../toolkit/BasketRedux/basketSlice';
import { useDispatch, useSelector } from 'react-redux'
import { wihlsitAdd } from '../../toolkit/WishlistRedux/wishlistSlices';
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function FlashSalesSection() {
    const [card, setCard] = useState([])
    

    const wishlistArr = useSelector((state) => state.wishlist.value)
    const dispatch=useDispatch()


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
        <section id='flashSalesSection'>
            <div className="flashSalesUpBox">
                <div className="todaysText">
                    <div className='normalBox'></div>
                    <p>Today’s</p>
                </div>
                <div className='salesTimer'>
                    <h1>Flash Sales</h1>
                <Timer/>
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
                                       <button >Add to card</button>
                                    </div>
                                    <div className='ProductAdeteAndBtns'>
                                        <div className="abateBox">-{item.abate}%</div>
                                       <div className="cardBtns">
                                       <button onClick={()=>dispatch(wihlsitAdd(item))}>
                                        {wishlistArr.find(x=>x._id === item._id)? <FaHeart style={{color:"#DB4444"}} /> : <FaRegHeart />}
                                        </button>
                                     <Link to={`/detail/${item._id}`}>
                                     <button><FaRegEye  /></button>
                                     </Link>
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
            <div className='flashSalesDownBox'>
                <button>View All Products</button>
            </div>
        </section>
    )
}

export default FlashSalesSection