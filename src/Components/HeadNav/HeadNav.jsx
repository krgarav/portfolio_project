import { Fragment } from "react";
import classes from "./HeadNav.module.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
const HeadNav = () => {
  const navigate = useNavigate();
  const headClass = `d-flex flex-row justify-content-between  px-10 py-4 ${classes.navclass}`;
  const logoutHandler = () => {
    navigate("/", { replace: true });
  };
  return (
    <Fragment>
      <nav className={`navbar navbar-expand-sm ${headClass}`} id="nav">
        <div className="container-fluid">
          {/* Logo / Brand */}
          <a className="navbar-brand text-white ml-10" href="#home">
            KUMAR GAURAV
          </a>

          {/* Hamburger toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ position: "absolute", left: "20px" }}
          >
            <span
              className="navbar-toggler-icon"
              style={{
                backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='white' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>")`,
              }}
            ></span>
          </button>

          {/* Collapsible nav links */}
          <div className="collapse navbar-collapse" id="mainNav">
            <div className="navbar-nav ms-auto text-white   ">
              <a href="#home" className="nav-link mx-4 text-white">
                Home
              </a>
              <a href="#aboutMe" className="nav-link mx-4 text-white">
                About Me
              </a>
              <a href="#resume" className="nav-link mx-4 text-white">
                Resume
              </a>
              <a href="#testimonial" className="nav-link mx-4 text-white">
                Testimonial
              </a>
              <a href="#contactMe" className="nav-link mx-4 text-white">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default HeadNav;
