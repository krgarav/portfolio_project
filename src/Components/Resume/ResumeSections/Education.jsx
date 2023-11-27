import React from "react";
import './Education.css';
export default function Education() {
    return (<div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
            <div className="d-flex flex-column new-one" >


                <span className="title">University Of Engineering And Manangement, Jaipur.</span>
                <span className="content">Bachelors Of Technology (BTECH)</span>

            </div>
            <div>
                <span className="passing-year"> 2021</span>

            </div>

        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
            <div className="d-flex flex-column new-one" >
                <span className="title">New Light Academy, Namchi.</span>
                <span className="content">Higher Secondary School (Intermidiate)</span>


            </div>
            <div>
                <span className="passing-year"> 2017</span>

            </div>

        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
            <div className="d-flex flex-column new-one" >

                <span className="title">Govt Secondary School, Rangpo.</span>
                <span className="content">Secondary School (Matriculation)</span>

            </div>
            <div>
                <span className="passing-year"> 2013</span>

            </div>

        </div>
    </div>)
}
