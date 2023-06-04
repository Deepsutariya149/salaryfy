import React from "react";
import playButton from "../img/fresher-eligibility-images/play.png";
import roadMap from "../img/fresher-eligibility-images/road_map_1_05.png";
import ExperienceCheckCategoryImg from "../img/experience-check-category_final.png";
import ExperienceMindLevelCategoryImg from '../img/mind_level.png'
import ExperienceSeniorLevelCategoryImg from '../img/senior_level.png'
import superFast from "../img/super_fast.png";
import superLite from "../img/super_lite.png";
import tickSuperFast from "../img/tick_super.png";
import { Link } from "react-router-dom";
import accessNow from "../img/access_now.png";
import { useNavigate } from "react-router-dom";
import comment from '../img/comment.png';

const ExperienceSelectBox = ({id}) => {

  const navigate = useNavigate()


  const handleNavigate = ()=>{
    navigate("/experience-eligibility-payment")
  }

const handleClickChnage=()=>{
  navigate("/experience-select-category")
}

  return (
    <div className="container">
      <section>
        {/* This container is used only for extra large screen */}
        <div className="d-none d-xl-block">
          <div className="eligibility-fresher-container">
            <div className="eligibility-fresher-left-side">
              <h2>Experience</h2>
              <p>
                Fill the form to check your eleigibility and get a salary-hike
                prediction.
              </p>
            </div>
            <div className="eligibility-fresher-right-side">
              <div className="eligibility-fresher-right-side-row">
                <img src={playButton} alt="play" />
                <p>How it Works?</p>
              </div>
            </div>
          </div>
        </div>

        {/* This container is used only for  large screen */}
        <div className="d-none d-lg-block d-xl-none">
          <div className="eligibility-fresher-container">
            <div className="eligibility-fresher-left-side">
              <h2>Experience</h2>
              <p>
                Fill the form to check your eleigibility and get a salary-hike
                prediction.
              </p>
            </div>
            <div className="eligibility-fresher-right-side">
              <div className="eligibility-fresher-right-side-row">
                <img src={playButton} alt="play" />
                <p>How it Works?</p>
              </div>
            </div>
          </div>
        </div>

        {/* This container is used only for  medium screen */}
        <div className="d-none d-md-block d-lg-none">
          <div className="eligibility-fresher-container-medium">
            <div className="eligibility-fresher-left-side-medium">
              <h2>Experience</h2>
              <p>
                Fill the form to check your eleigibility and get a salary-hike
                prediction.
              </p>
            </div>
            <div className="eligibility-fresher-right-side-medium">
              <div className="eligibility-fresher-right-side-row-medium">
                <img src={playButton} alt="play" />
                <p>How it Works?</p>
              </div>
            </div>
          </div>
        </div>

        {/* This container is used only for mobile screen */}
        <div className="d-sm-block d-md-none">
          <div className="eligibility-fresher-container-small">
            <div className="eligibility-fresher-left-side-small">
              <h2>Experience</h2>
              <p>
                Fill the form to check your eleigibility and get a salary-hike
                prediction.
              </p>
            </div>
            <div className="eligibility-fresher-right-side-small">
              <div className="eligibility-fresher-right-side-row-small">
                <img src={playButton} alt="play" />
                <p>How it Works?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="roadMap-section">
        <img src={roadMap} alt="road-map" />
      </section>

      <div className="experience-check-title">
      <div className="experience_check_category_side_container ml-3 experience-check-sub-title-left">
          <p>Showing plans for</p>
          {id==='1'?
          <>
          <h3>Entry level</h3>
          <p>(Freshers or upto 2 yrs experience)</p></>:id==='2'?<>
          <h3>Mid level</h3>
          <p>(2 -10 yrs experience)</p></>:<>
          <h3>Senior level</h3>
          <p>(Above 10yrs experience)</p></>}
        </div>
        <div className="experience-check-sub-title-right" onClick={()=>handleClickChnage()}>change</div>
        </div>
      <section className="experience_check_category_main_container">
        <div className="experience_check_category_side_container">
          {id==='1'?
          <>
          <img src={ExperienceCheckCategoryImg} alt="experience" /></>:id==='2'?<>
          <img src={ExperienceMindLevelCategoryImg} alt="experience" /></>:<>
          <img src={ExperienceSeniorLevelCategoryImg} alt="experience" /></>}
        </div>
        <div className="experience_check_category_inner_container">
        <div>
        <p className="experience_recommended">Recommended</p>
        <div className="experience_check_category_super_fast_container">
            
            <img
              style={{ backgroundColor: "black" }}
              src={superFast}
              alt="super_fast"
            />
            <h4 className="experience_days">15 Days</h4>
            <p className="experience_job_change">Job change time</p>
            <div className="experience_strike_container">
              <strike>₹1000</strike>
              <span>₹500</span>
            </div>
            <div>
              <div className="experience_lists">
                <img src={tickSuperFast} alt="tick" />
                <p>Job switch within 2 months</p>
              </div>
              <div className="experience_lists">
                <img src={tickSuperFast} alt="tick" />
                <p>Expected hike 80%</p>
              </div>
              <div className="experience_lists">
                <img src={tickSuperFast} alt="tick" />
                <p>Resume building</p>
              </div>
              <div className="experience_lists">
                <img src={tickSuperFast} alt="tick" />
                <p>LinkedIn Enhancement</p>
              </div>
              <div className="experience_lists">
                <img src={tickSuperFast} alt="tick" />
                <p>Job fitment analysis</p>
              </div>
            </div>
            <div className="experience_view_full_container">
              <Link className="experience_view_full" to="/experience-job-switch">
                View Full Details
              </Link>
            </div>
            <div onClick={handleNavigate} className="experience_access_now_button">
              <img src={accessNow} alt="access" />
            </div>
          </div>
        </div>
         
          <div className="experience_check_category_super_fast_container">
            <div
              style={{
                backgroundColor: "#005F59",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "15px 15px 0px 0px",
                padding:'10px 0px'
              }}
            >
              <img
                style={{
                  borderRadius: "15px 15px 0px 0px",
                  marginBottom: "15px",
                }}
                src={superLite}
                alt="super_fast"
              />
            </div>

            <h4 className="experience_days">60 Days</h4>
            <p className="experience_job_change">Job change time</p>
            <div className="experience_strike_container">
              <strike>₹500</strike>
              <span>₹0</span>
            </div>
            <div>
              <div className="experience_lists">
                <img src={tickSuperFast} alt="tick" />
                <p>Job switch within 3 months</p>
              </div>
              <div className="experience_lists">
                <img src={tickSuperFast} alt="tick" />
                <p>Expected hike 30%</p>
              </div>
              <div className="experience_lists">
                <img src={tickSuperFast} alt="tick" />
                <p>Resume building</p>
              </div>
              <div className="experience_lists">
                <img src={tickSuperFast} alt="tick" />
                <p>LinkedIn Enhancement</p>
              </div>
              <div className="experience_lists">
                <img src={tickSuperFast} alt="tick" />
                <p>Job fitment analysis</p>
              </div>
            </div>
            <div className="experience_view_full_container">
              <Link className="experience_view_full" to="/experience-job-switch">
                View Full Details
              </Link>
            </div>
            <div onClick={handleNavigate} className="experience_access_now_button">
              <img src={accessNow} alt="access" />
            </div>
          </div>
        </div>
      </section>
      
      <div className="mb-3"> <div className="experience-comment-title">Candidates who opted our Services</div>
          <div><img src={comment} alt="comment" /></div></div>
    </div>
  );
};

export default ExperienceSelectBox;
