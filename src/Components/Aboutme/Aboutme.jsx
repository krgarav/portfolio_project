import { Fragment } from 'react';
import './Aboutme.css';


function AboutMe() {
    return (
        <Fragment>
            <div className="about-me-section about-me-inside my-5 " id='aboutMe'>
                <div className="d-flex flex-column">
                    <span className="heading">About Me</span>
                    <span className="subheading">Why choose me?</span>
                    <div className="row justify-content-center shadow-lg my-5">
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center ">
                            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_yswivetl.json"
                                background="transparent" speed="1" style={{ width: "500px", height: "500px" }}
                                loop
                                autoplay></lottie-player>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column">
                            <span className="text-area">
                                Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency.
                            </span>
                            <br />
                            <span className="few-highlights">
                                <span className="few-text">Here are a Few Highlights:</span>
                            </span>
                            <span className="few-lists">
                                <ul>
                                    <li>Full Stack web and mobile development</li>
                                    <li>React and React Native,Android studio,Flutter </li>
                                    <li>Redux for State Management</li>
                                    <li>Building RESTful API</li>
                                    <li>Managing databases</li>
                                </ul>

                            </span>
           </div>
                    </div>
                </div>
          </div>
        </Fragment>
    )
}
export default AboutMe;