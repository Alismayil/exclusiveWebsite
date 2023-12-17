import React, { useRef, useState } from 'react';
import './aboutPeopleSection.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { VscSend } from "react-icons/vsc";
import { LiaFacebookF } from "react-icons/lia";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";

function AboutPeopleSection() {
    return (
        <section id='aboutPeopleSection'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="peopleImgBox">
                        <img src="https://s3-alpha-sig.figma.com/img/0881/49fd/5afc043392ee3cbb529f429b3e2098d3?Expires=1703462400&Signature=fre~F4oG157GjR-u7Xv0pf1z8GIe9KWSyeGhGL8u3ciCp6N1QYKP~zryQf-FDtJMVzm0jOXltzjUmBR2z8tx66sXZkc6bLsnseHzwd5dvXRp~sh74egaoT9UC4nrxPiI~-yHd3FoDmAcF1wcuVl8eWFcuVjljFeFRlMiUYFTs3xAUKrIhU4UIgUlbUbHskAzOcSQPJn-PXozX8dgvROAlJ0w1EiA9oMoYEyiOERbHToJftFiu07OFtIZCzmHsMzgXa6MWzGJNMXLF5RLiGJsvsUmLhZLmQttnD2bV1u9wV0tYf-h~2-xZRz--lGW6Wg-VwYtnYCDbIReC0Q0gzqWxw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    </div>
                    <div className="peopleTextBox">
                        <h1>Tom Cruise</h1>
                        <p>Founder & Chairman</p>
                        <div className="aboutSectionSocialMediaBox">
                            <div className="abooutSectionSocialMedia">
                                <FiTwitter style={{ fontSize: "25px" }} />
                            </div>
                            <div className="abooutSectionSocialMedia">
                                <FaInstagram style={{ fontSize: "30px" }} />
                            </div>
                            <div className="abooutSectionSocialMedia">
                                <RiLinkedinLine style={{ fontSize: "30px" }} />

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="peopleImgBox">
                        <img src="https://s3-alpha-sig.figma.com/img/8438/eab9/a2fe88af0272adecd83422d0cb7e20d7?Expires=1703462400&Signature=d~~-bflPEZ5POD0-SUubTCckvGPihk7iBmv4CHJJgZFobsAyexCfJFInXplf0l-ZhR6xWHRscOkCCw6JDIUXtIWoUSKGWmXp2yXpi5FFbNV1j2wWznBBmfuHkmIcGNLiuGd2THZs-t6hzFXhzYqp1oX4A0nxAXREJjOC3L72cuRIBu3AEAe-1cFL4J5May86dcIL3sWlUdDRiq3TkEBBPLeK~2yl84PrvqTi52J6kAwe4K7SbOlFLLpEj9BRfWgBRXun0t4PD~aF3AloZW01koICriF29dRabD3RIaJaCs~QgvpwdffIyW~13aHfFETa1l4brthflqRBrJko31-TPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    </div>
                    <div className="peopleTextBox">
                        <h1>Emma Watson</h1>
                        <p>Managing Director</p>
                        <div className="aboutSectionSocialMediaBox">
                            <div className="abooutSectionSocialMedia">
                                <FiTwitter style={{ fontSize: "25px" }} />
                            </div>
                            <div className="abooutSectionSocialMedia">
                                <FaInstagram style={{ fontSize: "30px" }} />
                            </div>
                            <div className="abooutSectionSocialMedia">
                                <RiLinkedinLine style={{ fontSize: "30px" }} />

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="peopleImgBox">
                        <img src="https://s3-alpha-sig.figma.com/img/ede4/8f2b/5df8103b281240ce5bafe5dd7d215ab8?Expires=1703462400&Signature=bXjAe22cdsUTC11o-Oz-rBTl7iELUjKpfOA712K52v0k9ETflLIOwYGCOM97gd3J87vv9KEMjsPfC6lwHOPC6O02APd0OjYdXRZ0g3kroVZ~bg5BKFcKCnAlHbhbvAvUMp8UQEFljFUjFM2A0-WnFl~Q6LX0EPObCD2zH8ROmOLRmvXIjl3szPOk558rAlGklTGK4dcfD-wpnCscXlidzkh6e866Gwd1Rj2Ttnjp-CftP789kNzxMonmt~VNNhgpRMn5wCY~Wy7cXk2ZoYLJ3pJzJKBJFWD9bFcDpSfC89oOw4vGA89dCaQPyEPq1coBJlSeW5zkfBix8hCuS1TLQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className='img3' alt="" />
                    </div>
                    <div className="peopleTextBox">
                        <h1>Tom Cruise</h1>
                        <p>Founder & Chairman</p>
                        <div className="aboutSectionSocialMediaBox">
                            <div className="abooutSectionSocialMedia">
                                <FiTwitter style={{ fontSize: "25px" }} />
                            </div>
                            <div className="abooutSectionSocialMedia">
                                <FaInstagram style={{ fontSize: "30px" }} />
                            </div>
                            <div className="abooutSectionSocialMedia">
                                <RiLinkedinLine style={{ fontSize: "30px" }} />

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="peopleImgBox">
                        <img src="https://s3-alpha-sig.figma.com/img/0881/49fd/5afc043392ee3cbb529f429b3e2098d3?Expires=1703462400&Signature=fre~F4oG157GjR-u7Xv0pf1z8GIe9KWSyeGhGL8u3ciCp6N1QYKP~zryQf-FDtJMVzm0jOXltzjUmBR2z8tx66sXZkc6bLsnseHzwd5dvXRp~sh74egaoT9UC4nrxPiI~-yHd3FoDmAcF1wcuVl8eWFcuVjljFeFRlMiUYFTs3xAUKrIhU4UIgUlbUbHskAzOcSQPJn-PXozX8dgvROAlJ0w1EiA9oMoYEyiOERbHToJftFiu07OFtIZCzmHsMzgXa6MWzGJNMXLF5RLiGJsvsUmLhZLmQttnD2bV1u9wV0tYf-h~2-xZRz--lGW6Wg-VwYtnYCDbIReC0Q0gzqWxw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    </div>
                    <div className="peopleTextBox">
                        <h1>Tom Cruise</h1>
                        <p>Founder & Chairman</p>
                        <div className="aboutSectionSocialMediaBox">
                            <div className="abooutSectionSocialMedia">
                                <FiTwitter style={{ fontSize: "25px" }} />
                            </div>
                            <div className="abooutSectionSocialMedia">
                                <FaInstagram style={{ fontSize: "30px" }} />
                            </div>
                            <div className="abooutSectionSocialMedia">
                                <RiLinkedinLine style={{ fontSize: "30px" }} />

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="peopleImgBox">
                        <img src="https://s3-alpha-sig.figma.com/img/8438/eab9/a2fe88af0272adecd83422d0cb7e20d7?Expires=1703462400&Signature=d~~-bflPEZ5POD0-SUubTCckvGPihk7iBmv4CHJJgZFobsAyexCfJFInXplf0l-ZhR6xWHRscOkCCw6JDIUXtIWoUSKGWmXp2yXpi5FFbNV1j2wWznBBmfuHkmIcGNLiuGd2THZs-t6hzFXhzYqp1oX4A0nxAXREJjOC3L72cuRIBu3AEAe-1cFL4J5May86dcIL3sWlUdDRiq3TkEBBPLeK~2yl84PrvqTi52J6kAwe4K7SbOlFLLpEj9BRfWgBRXun0t4PD~aF3AloZW01koICriF29dRabD3RIaJaCs~QgvpwdffIyW~13aHfFETa1l4brthflqRBrJko31-TPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    </div>
                    <div className="peopleTextBox">
                        <h1>Emma Watson</h1>
                        <p>Managing Director</p>
                        <div className="aboutSectionSocialMediaBox">
                            <div className="abooutSectionSocialMedia">
                                <FiTwitter style={{ fontSize: "25px" }} />
                            </div>
                            <div className="abooutSectionSocialMedia">
                                <FaInstagram style={{ fontSize: "30px" }} />
                            </div>
                            <div className="abooutSectionSocialMedia">
                                <RiLinkedinLine style={{ fontSize: "30px" }} />

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
         
        </section>
    )
}

export default AboutPeopleSection