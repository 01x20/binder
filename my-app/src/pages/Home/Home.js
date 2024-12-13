import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from "./Home.module.css";
import 'swiper/css';

import dummy from "../../asstes/images/img_dummy.gif";

//icons
import { BsFolder2Open } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Home = () => {
    return (
        <>
        <div className={`${styles.top_banner}`}>
            <div className={`${styles.text_box}`}>
                안녕하세요, <strong>가을</strong>님!<br/>
                나만의 소중한 공연 기록을<br/>
                <strong>바인더</strong>에 담아 보세요
            </div>
        </div>
        <div className={`${styles.my_binder_wrap}`}>
            <div className={`${styles.desc}`}>my binder</div>
            <div className={`${styles.title_btn}`}>
                <div className={`${styles.title}`}>총 <span><strong>0</strong> 건</span>의 공연 기록이 담겼어요</div>
                <button type="button" className={`${styles.btn}`}>전체보기</button>
            </div>
        </div>
        <div className={`${styles.empty_box}`}>
            <div className={`${styles.text}`}>
                <span className={`${styles.icon}`}><BsFolder2Open/></span>
                기록된 공연이 없어요 😥<br/>
                바인더에 공연을 기록해 주세요
            </div>
        </div>
        <div className={`${styles.my_binder_list}`}>
        <Swiper
            slidesPerView={1.8}
            spaceBetween={10}
            className={`${styles.my_binder_list}`}>
            <SwiperSlide  className={`${styles.ticket_shape}`}>
                <div className={`dot ${styles.contents_title}`}>THE VOLUNTEERS ASIA TOUR 2024 - SEOUL</div>
                <div className={`${styles.contents_poster}`}>
                    <div className={`${styles.img_box}`}>
                        <img src={dummy} alt="THE VOLUNTEERS ASIA TOUR"/>
                        <div className={`${styles.review_num}`}>
                            <FaStar className={`${styles.star}`}/> 5
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide  className={`${styles.ticket_shape}`}>
                <div className={`dot ${styles.contents_title}`}>THE VOLUNTEERS ASIA TOUR 2024 - SEOUL</div>
                <div className={`${styles.contents_poster}`}>
                    <div className={`${styles.img_box}`}>
                        <img src={dummy} alt="THE VOLUNTEERS ASIA TOUR"/>
                        <div className={`${styles.review_num}`}>
                            <FaStar className={`${styles.star}`}/> 5
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
        </>
    );
};

export default Home;