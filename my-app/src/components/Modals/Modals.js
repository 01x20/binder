import React from "react";

import styles from "./Modals.module.css";

import { VscClose } from "react-icons/vsc";

const Modal = ({isOpen, title, children, closeModal}) => {
    
    return (
        <>
        <div className={
            isOpen ? `${styles.modal_wrap} ${styles.modal_show}` : `${styles.modal_wrap}`
        }>
            <div>
                <div className={`${styles.modal_header}`}>
                    <p className={`${styles.title}`}>{title}</p>
                    <button type="button" className={`${styles.modal_close}`} onClick={closeModal}><VscClose /></button>
                </div>
                <div className={`${styles.modal_body}`}>
                    {children}
                </div>
            </div>
        </div>
        <div className={ isOpen ? `${styles.dimmed} ${styles.active}` : `${styles.dimmed}` }></div>
        </>
    );
}


export default Modal;