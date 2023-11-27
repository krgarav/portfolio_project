import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Spinner from "../Spinner/spinner";
import "./Contactme.css";
import {Button} from "react-bootstrap";

const Contactme = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [spin, setSpin] = useState(false);
  const form = useRef();
  const sendHandler = (event) => {
    setSpin(true);
    event.preventDefault();

    emailjs
      .sendForm(
        "service_n4gt9if",
        "template_qy9ake3",
        form.current,
        "-OpzpvvA2b1HNhh5q"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you for contacting");
          setEmail("");
          setMessage("");
          setName("");
        },
        (error) => {
          alert("Something went wrong : ", error.text);
          console.log(error.text);
        }
      )
      .finally(() => {
        setSpin(false); // Set spin to false when the API call is complete (success or error)
      });
  };
  return (
    <div className="contact-me-part" id="contactMe">
      <div className="relative-bg"></div>
      <div className="contact-me-inner-part d-flex flex-column">
        <span className="heading">Contact Me</span>
        <span className="subheading">Lets Keep In Touch </span>
       
          <div className="contact-me-card ">
            <div className="col-lg-6 colmd-5 col-sm-12 left-contact px-2 py-2">
              <span className="get-in-touch mx-4 my-5">Get In Touch</span>
              <div className="py-5 d-flex justify-content-center ">
                <lottie-player
                  src="https://assets8.lottiefiles.com/packages/lf20_gzl797gs.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "300px", height: "300px" }}
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </div>
            <div className="col-lg-6 col-md-5 col-sm-12 my-auto">
              <div className="d-flex flex-column card-contact-right">
                <form
                  ref={form}
                  className="input-group my-3 d-flex flex-column"
                  onSubmit={sendHandler}
                >
                  <label className="labels">Name</label>
                  <input
                    className="input-group"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="Enter your name"
                    required
                  />
                  <label className="labels">Email</label>
                  <input
                    className="input-group"
                    name="email"
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Enter your email"
                    required
                  />
                  <label className="labels">Message</label>
                  <textarea
                    className="input-group"
                    name="message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    rows="4"
                    cols="50"
                    type="text"
                    required
                  />
                  <div className="button-class">
                    <Button variant="success" type="submit">
                      {!spin && "send"}
                      {spin && <Spinner />}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Contactme;
