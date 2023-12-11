import React, { useEffect, useState } from 'react'
import './flashSales.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import axios from 'axios';

function FlashSalesSection() {
    const [card, setCard] = useState([])
    const baseUrl = 'http://localhost:3000/exclusive'

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
        <section id='flashSalesSection'>
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
                                </div>
                                <div className='cardText'>a
                                    <p>
                                        {handleRating(item.rating).map(x => {
                                            if (x === 1) {
                                                return <i class="fa-solid fa-star"></i>
                                            }
                                            else if (x === 2) {
                                                return <i class="fa-regular fa-star-half-stroke"></i>
                                            }
                                            return <i class="fa-regular fa-star"></i>

                                        })}



                                    </p>

                                </div>
                            </div>
                        </SwiperSlide>

                    </>
                ))}
            </Swiper>







        </section>
    )
}

export default FlashSalesSection