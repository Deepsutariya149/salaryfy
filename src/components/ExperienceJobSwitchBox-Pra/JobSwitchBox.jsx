import React from 'react'
import superLiteImage from '../img/super_lite.png'
import tick from '../img/tick_super.png'
import backToPlans from '../img/back_to_plans.png'
import singleComment from '../img/side_single_comment.png'
import { useNavigate } from "react-router-dom";
const JobSwitchBox = ({id}) => {
    const navigate = useNavigate();
    const backToPlansClick = () => {
        navigate(`/experience-check-category/${id}`);
    };
  return (
    <div className="container"style={{display:'flex'}}>
        <div style={{marginTop:'15%',marginRight    :'5%'}}>
        <img src={singleComment} alt="side_single_comment"/>
        </div>
        <div className="jobSwitch_container">
        <div className="jobSwitch_title_container_experience">
        <p className="jobSwitch_description">Details for</p>
         <h3 className="jobSwitch_title">Job Switch Plan</h3>
        </div>
         <div className="jobSwitch_inner_container_experience">
              <div className="jobSwitch_inner_container_title_experience">
                    <img src={superLiteImage} alt="super" style={{marginTop:'20px',marginLeft:'20px'}}/>
                    {/* <h3 className='jobSwitch_title_bar_title'>Super Fast</h3> */}
              </div>

              <div className='jobSwitch_next_container_experience'>
              <div  style={{display:'flex',gap:'5px',alignItems:'center',justifyContent:'space-between'}}>
                <div>
                    <h3 className='fifteen_days'>15 Days</h3>
                 
                </div>
                <div style={{display:'flex',gap:'5px',alignItems:'center'}}>
                    <strike className="thousand_strike">₹1000</strike>
                    <span className="five_hundred_strike">₹500</span>
                </div>
              </div>
              <p>Job change time</p>

              <div className='jobSwitch_left_right_container_experience'>

              <div className='jobSwitch_left_list'>
                <div>
                    <img src={tick} alt="tick" />
                    <p>Job switch within 2 months</p>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <p>Expected hike 80%</p>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <p>Resume building</p>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <p>Linkedinenhancement</p>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <p>Job fitment analysis</p>
                </div>
                
              </div>

              <div className='jobSwitch_right_list'>
                <div>
                    <img src={tick} alt="tick" />
                    <p>Job switch within 2 months</p>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <p>Expected hike 80%</p>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <p>Resume building</p>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <p>Linkedinenhancement</p>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <p>Job fitment analysis</p>
                </div>
                
              </div>

              </div>

              <div className='jobSwitch_access_button'>
                <img src={backToPlans} alt="access" onClick={backToPlansClick}/>
              </div>
              </div>

              
         </div>
        </div>
    </div>
  )
}

export default JobSwitchBox