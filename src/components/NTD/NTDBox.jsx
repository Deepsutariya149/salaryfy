import React from 'react'
import FilledClose from '../img/filled_close.png'
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import DirectPlacement  from '../img/direct_placement.png'
import Okay  from '../img/okay.png'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: null,
    background: null,
  },
};

const NTDBox = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();
    const experienceClick = () => {
        navigate("/AfterScholarshipTestDashboardTwo");
    };

    const handleModal=()=>{
        setIsOpen(!modalIsOpen)
    }
  return (
    <div className="container">
              <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <div className='modal_main'>
        <div className='modal_first_image'><img src={DirectPlacement} alt="DirectPlacement" height="150px" width="150px"/></div>
        <div className='modal_text'>Payment Completed</div>
        <div className='modal_second_image' onClick={()=>experienceClick()}><img src={Okay} alt="Okay" height="40px"/></div>
       </div>
      </Modal>
        <div className='NTD-outer'>
            <div className='cross-ico'><img src={FilledClose} alt="FilledClose" /></div>
            <div className='main_title'>NOTE TO BE DEVEDLOPED</div>
            <div className='second_title'>Payment gateway will <br/> open</div>
            <div className='thired_title'>After successful payment (Rs 500/-)</div>
            <div className='done_btn'>                   
                <button
                    onClick={()=>handleModal()}
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