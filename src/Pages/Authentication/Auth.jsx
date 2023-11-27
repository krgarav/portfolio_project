import { Fragment, useRef } from "react";
import { useNavigate } from "react-router";
import { Form, Button } from "react-bootstrap";
import classes from "./Auth.module.css";
import { FcBusinessman } from "react-icons/fc";
import { FaArrowCircleRight } from "react-icons/fa";
const Auth = () => {
  //   const [state, setState] = useState(false);
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const email = enteredEmail.current.value;
    const password = enteredPassword.current.value;
    if (email === "kumar@gmail.com" && password === "123456") {
      navigate("/portfolio", { replace: true });
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <Fragment>
      <div className={classes.mainpage}>
        <div className={classes.loginbox}>
          <div className={classes.lottieplayer}>
            <lottie-player
              src="https://lottie.host/ff3b6286-5c9a-446b-98ff-02b7560a2ff7/DDJaBJxmdm.json"
              background="#87CEFA"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>

          <div className={classes.container}>
            <FcBusinessman />
            <h2>Welcome Back</h2>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  ref={enteredEmail}
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  ref={enteredPassword}
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>

              <Button
                style={{ backgroundColor: "rgb(3, 3, 78)" }}
                type="submit"
                className={classes.loginbutton}
              >
                Login
                <FaArrowCircleRight
                  style={{
                    float: "right",
                    margin: "5px 5px",
                    fontSize: "1.2rem",
                  }}
                />
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Auth;
