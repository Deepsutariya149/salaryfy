import React from 'react'
import FilledClose from '../img/filled_close.png'
import { useNavigate } from "react-router-dom";

const NTDBox = () => {
    const navigate = useNavigate();
    const experienceClick = () => {
        navigate("/experience-select-category");
    };

  return (
    <div className="container">
        <div className='NTD-outer'>
            <div className='cross-ico'><img src={FilledClose} alt="FilledClose" /></div>
            <div className='main_title'>NOTE TO BE DEVEDLOPED</div>
            <div className='second_title'>Payment gateway will <br/> open</div>
            <div className='thired_title'>After successful payment (Rs 500/-)</div>
            <div className='done_btn'>                   
                <button
                    onClick={experienceClick}
                    className="experienced-button-small"
                >
                    Done
                </button>
            </div>
        </div>
    </div>
  )
}

export default NTDBox