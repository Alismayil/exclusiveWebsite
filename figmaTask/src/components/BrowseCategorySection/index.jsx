import React from 'react'
import './browseCategorySection.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoWatchOutline } from "react-icons/io5";
import { FiCamera } from "react-icons/fi";
import { PiHeadphones } from "react-icons/pi";
import { LuGamepad } from "react-icons/lu";
import { GoTools } from "react-icons/go";
import { FaTabletAlt } from "react-icons/fa";
import { IoMdLaptop } from "react-icons/io";
import { MdOutlineSpeaker } from "react-icons/md";

function BrowseCategorySection() {
    return (
        <section id='browseCategorySection'>
            <div className="browseCategoryUpBox">
                <div className="todaysText">
                    <div className='normalBox'></div>
                    <p>Categories</p>
                </div>
                <div className='salesTimer'>
                    <h1>Browse By Category</h1>
                </div>
            </div>
            <div className='browseCategoryDownBox'>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='swiperInBox'>
                            <IoIosPhonePortrait />
                            <p>Phones</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiperInBox'>
                            <HiOutlineDesktopComputer />
                            <p>Computers</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiperInBox'>
                            <IoWatchOutline onePortrait />
                            <p>SmartWatch</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiperInBox' style={{ backgroundColor: "#DB4444", color: "white" }}>
                            <FiCamera Portrait />
                            <p>Camera</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiperInBox'>
                            <PiHeadphones />
                            <p>HeadPhones</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiperInBox'>
                            <LuGamepad />
                            <p>Gaming</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiperInBox'>
                            <GoTools />
                            <p>Electronic Tools</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiperInBox'>
                            <FaTabletAlt />
                            <p>Tablet</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiperInBox'>
                            <IoMdLaptop />
                            <p>Laptop</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiperInBox'>
                            <MdOutlineSpeaker />
                            <p>Speaker</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </section>
    )
}

export default BrowseCategorySection