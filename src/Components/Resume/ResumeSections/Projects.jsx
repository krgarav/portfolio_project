import React from "react";
import "./Project.css";

export default function Projects() {
  return (
    <div className="d-flex flex-column main ">
      <div className="education-one my-4 justify-content-between d-flex flex-row">
        <div className="d-flex flex-column new-one">
          <span className="title">React Meals</span>
          <a href="https://react-meals-reataurant.netlify.app" target="_blank" rel="noreferrer" >
            https://react-meals-reataurant.netlify.app
          </a>
          <span className="content">Technologies - React js , Css3 </span>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dje269eh5/image/upload/v1683882983/reactmeals_zg1uup.jpg"
            width="90"
            height="60"
            alt="reactmeals"
          />
        </div>
      </div>
      <div className="education-one my-4 justify-content-between d-flex flex-row">
        <div className="d-flex flex-column new-one">
          <span className="title">Ecommerce Site</span>
          <a
            href="https://e-commerce-reactapplication.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            https://e-commerce-reactapplication.netlify.app
          </a>
          <span className="content">
            Technologies - React js , React bootstrap , React Router
          </span>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dje269eh5/image/upload/v1683882982/ecommerce_qw0snw.jpg"
            width="90"
            height="60"
            alt="reactmeals"
          />
        </div>
      </div>
      <div className="education-one my-4 justify-content-between d-flex flex-row">
        <div className="d-flex flex-column new-one">
          <span className="title">Expense Tracker </span>
          <a href="https://expense-observer.netlify.app" target="_blank" rel="noreferrer">
            https://expense-observer.netlify.app
          </a>
          <span className="content">
            Technologies - React js , React bootstrap , React Router, Redux
            Toolkit
          </span>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dje269eh5/image/upload/v1683882982/expenseApp_ill7yc.jpg"
            width="90"
            height="60"
            alt="reactmeals"
          />
        </div>
      </div>
      <div className="education-one my-4 justify-content-between d-flex flex-row">
        <div className="d-flex flex-column new-one">
          <span className="title">Mail Box Client </span>
          <a href="https://react-mail-box-client.netlify.app" target="_blank" rel="noreferrer">
            https://react-mail-box-client.netlify.app
          </a>
          <span className="content">
            Technologies - React js , React bootstrap , React Router,{" "}
          </span>
          <span className="content">Redux Toolkit ,google firebase</span>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dje269eh5/image/upload/v1683882982/Mailbox_xwd63a.jpg"
            width="90"
            height="60"
            alt="reactmeals"
          />
        </div>
      </div>
    </div>
  );
}
