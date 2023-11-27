import { Fragment } from "react";
import classes from "./HeadNav.module.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
// import { useHistory } from 'react-router-dom';
const HeadNav = () => {
  // const history = useHistory();
  const navigate = useNavigate();
  const headClass = `d-flex flex-row justify-content-between  px-10 py-4 ${classes.navclass}`;
  const logoutHandler = () => {
    navigate("/", { replace: true });
    // history.push("/")
  };
  return (
    <Fragment>
      <nav className={headClass} id="nav">
     
        <div className="d-flex flex-row">
          <a href="#home" className="mx-4 nav-items">
            Home
          </a>
          <a href="#aboutMe" className="mx-4 nav-items">
            About Me
          </a>
          <a href="#resume" className="mx-4 nav-items">
            Resume
          </a>
          <a href="#testimonial" className="mx-4 nav-items">
            Testimonial
          </a>
          <a href="#contactMe" className="mx-4 nav-items">
            Contact Me
          </a>
        </div>
        <Button variant="outline-danger" onClick={logoutHandler}>Logout</Button>
      </nav>
    </Fragment>
  );
};

export default HeadNav;
