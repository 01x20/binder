import React, { useState } from "react";
import DatePicker from 'react-datepicker';

import styles from "./Write.module.css";
import 'react-datepicker/dist/react-datepicker.css';

import dummy from "../../asstes/images/img_dummy.gif";

//components
import Modal from "../../components/Modals/Modals";

//icons
import { FiFlag } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";

const Write = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
        <div className={`${styles.inner}`}>
            <button type="button" className={`${styles.search}`} onClick={openModal}>
                <LuSearch /> 공연 검색
            </button>
            <div>
                <div className={`${styles.input_wrap}`}>
                    <FiFlag className={`${styles.icon}`} />
                    <input readOnly/>
                </div>
                <div className={`${styles.flex_box}`}>
                    <div className={`${styles.left}`}>
                        <img src={dummy} alt="THE VOLUNTEERS ASIA TOUR" />
                    </div>
                    <div className={`${styles.right}`}>
                        <div className={`${styles.flag}`}>대중음악</div>
                        <div className={`${styles.input_wrap}`}>
                            <FiCalendar className={`${styles.icon}`} />
                            <input readOnly/>
                        </div>
                        <div className={`${styles.input_wrap}`}>
                            <FiClock className={`${styles.icon}`} />
                            <input readOnly/>
                        </div>
                        <div className={`${styles.input_wrap}`}>
                            <FiMapPin className={`${styles.icon}`} />
                            <input readOnly/>
                        </div>
                    </div>
                </div>
                <div className={`${styles.review_box}`}>
                    <div className={`${styles.title}`}>
                        <FaStar className={`${styles.icon}`} /> 공연에 대한 별점을 남겨 주세요!
                    </div>
                    <div className={`${styles.input}`}>
                        <input placeholder="0" />
                        <span> / 5점</span>
                    </div>
                </div>
            </div>
            <div>
                에디터 영역
            </div>
        </div>
        <Modal isOpen={isModalOpen} title="공연 검색" closeModal={closeModal}>
            <div className={`${styles.datepicker_wrap}`}>
                <div className={`${styles.datepicker}`}>
                    <FiCalendar className={`${styles.icon}`}/>
                    <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="yyyy년 MM월 dd일"
                    readOnly
                    />
                </div>
                ~
                <div className={`${styles.datepicker}`}>
                    <FiCalendar className={`${styles.icon}`}/>
                    <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="yyyy년 MM월 dd일"
                    readOnly
                    />
                </div>
            </div>
            <div className={`${styles.search_wrap}`}>
                <input placeholder="검색어를 입력해 주세요" />
                <button type="button"><LuSearch /></button>
            </div>
            <div className={`${styles.result_wrap}`}>
                
            </div>
            <div className={`${styles.bottom_btn}`}>
                <button type="button" disabled>선택</button>
            </div>
        </Modal>
        </>
    );
};

export default Write;