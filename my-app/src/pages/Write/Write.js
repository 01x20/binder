import React, { useState, forwardRef } from "react";
import DatePicker from 'react-datepicker';
import {ko} from "date-fns/locale";
import axios from "axios";
import xml2js from "xml2js";

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
import { TbListSearch } from "react-icons/tb";

const Write = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [keywords, setKeywords] = useState('');
    const [data, setData] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [selectedData, setSelectedData] = useState(null);

    const key = process.env.REACT_APP_API_KEY;

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const formatToYYYYMMDD = (date) => {
        if (!date) return "";
        return date.toISOString().slice(0, 10).replace(/-/g, "");
    };
    
      const handleStartDateChange = (date) => {
        setStartDate(date);
    };
    
      const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <input type="text" readOnly value={value} onClick={onClick} ref={ref} placeholder="날짜 선택" />
    ));

    const fetchData = async () => {
        const obj  = {
            service: decodeURIComponent(key),
            stdate: formatToYYYYMMDD(startDate),
            eddate: formatToYYYYMMDD(endDate),
            shprfnm: keywords,
            cpage: 1,
            rows: 10,
        }
        const response = await axios.get('http://localhost:3001/api/openApi/restful/pblprfr', {
            params: obj,
        });
    
        xml2js.parseString(response.data, (err, result) => {
            if (err) {
                throw err;
            }
            const resData = result.dbs.db;
            setData(resData);
        });
    };

    const handleSearchKeywords = (e) => {
        const keyword = e.target.value;
        setKeywords(keyword);
    };

    const handleSelection = (item, index) => {
        setSelectedItem(item);
        setIsButtonDisabled(false);
        setSelectedIndex(index);
    };

    const handleSelectedItems = (item) => {
        setSelectedData(item);
        setIsModalOpen(false);
    };

    const SelectedContents = ({data}) => {
        return(
            <div>
                <div className={`${styles.input_wrap}`}>
                    <FiFlag className={`${styles.icon}`} />
                    <input value={data.prfnm} readOnly/>
                </div>
                <div className={`${styles.flex_box}`}>
                    <div className={`${styles.left}`}>
                        <img src={data.poster} alt={data.prfnm} />
                    </div>
                    <div className={`${styles.right}`}>
                        <div className={`${styles.flag}`}>{data.genrenm}</div>
                        <div className={`${styles.input_wrap}`}>
                            <FiCalendar className={`${styles.icon}`} />
                            <input value={`${data.prfpdfrom} ~ ${data.prfpdto}`} readOnly/>
                        </div>
                        <div className={`${styles.input_wrap}`}>
                            <FiClock className={`${styles.icon}`} />
                            <input readOnly/>
                        </div>
                        <div className={`${styles.input_wrap}`}>
                            <FiMapPin className={`${styles.icon}`} />
                            <input value={data.fcltynm} readOnly/>
                        </div>
                    </div>
                </div>
                <div className={`${styles.review_box}`}>
                    <div className={`${styles.title}`}>
                        <FaStar className={`${styles.icon}`} /> 공연에 대한 별점을 남겨 주세요!
                    </div>
                    <div className={`${styles.input}`}>
                        <input type="number" maxLength={1} placeholder="0" />
                        <span> / 5점</span>
                    </div>
                </div>
                <div>
                    에디터 영역
                </div>
            </div>
        );
    }

    return (
        <>
        <div className={`${styles.inner}`}>
            <button type="button" className={`${styles.search}`} onClick={openModal}>
                <LuSearch /> 공연 검색
            </button>
            {selectedData ?
            <SelectedContents data={selectedData} /> :
            <div>공연을 검색해 주세요</div>}
            
        </div>
        <Modal isOpen={isModalOpen} title="공연 검색" closeModal={closeModal}>
            <div className={`${styles.datepicker_wrap}`}>
                <div className={`${styles.datepicker}`}>
                    <FiCalendar className={`${styles.icon}`}/>
                    <DatePicker
                    shouldCloseOnSelect
                    selected={startDate}
                    onChange={handleStartDateChange}
                    dateFormat="yyyy년 M월 d일"
                    locale={ko}
                    customInput={<CustomInput />}
                    />
                </div>
                ~
                <div className={`${styles.datepicker}`}>
                    <FiCalendar className={`${styles.icon}`}/>
                    <DatePicker
                    shouldCloseOnSelect
                    selected={endDate}
                    minDate={startDate}
                    onChange={handleEndDateChange}
                    dateFormat="yyyy년 M월 d일"
                    locale={ko}
                    customInput={<CustomInput />}
                    />
                </div>
            </div>
            <div className={`${styles.search_wrap}`}>
                <input placeholder="검색어를 입력해 주세요" onChange={handleSearchKeywords}/>
                <button type="button" onClick={fetchData}><LuSearch /></button>
            </div>
            <div className={`${styles.result_wrap}`}>
            {data && data.length > 0 ? (
                <ul>
                {data.map((item, index) => (
                    <li
                    key={index}
                    className={
                        selectedIndex === index
                            ? styles.selected
                            : ""
                    }>
                        <label>
                            <input
                            type="radio"
                            name="selectItems"
                            onChange={() => handleSelection(item, index)}
                            />
                            <div className={`${styles.img_box}`}>
                                <img src={item.poster} alt={item.prfnm}/>
                                <div className={`dot ${styles.title}`}>{item.prfnm}</div>
                            </div>
                        </label>
                    </li>
                ))}
                </ul>
            ) : (
                <div className={`${styles.result_none}`}>
                    <TbListSearch style={{fontSize : '24px'}} />검색어를 입력해 주세요
                </div>
            )}
            </div>
            <div className={`${styles.bottom_btn}`}>
                <button type="button" disabled={isButtonDisabled} onClick={() => handleSelectedItems(selectedItem)}>선택</button>
            </div>
        </Modal>
        </>
    );
};

export default Write;