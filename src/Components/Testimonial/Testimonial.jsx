import { Fragment, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import classes from "./Testimonial.module.css";
import Cards from "../Cards/Cards";
const Testimonial = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const populate = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1/comments"
        );
        const imgresponse = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_limit=5"
        );
        const data = await response.json();
        const imgdata = await imgresponse.json();
        const combinedArray = data.map((item, index) => ({
          ...item,
          ...imgdata[index],
        }));
        setComments(combinedArray);
      } catch (err) {
        console.log("Error occured : ", err);
      }
    };
    populate();
  }, []);
  console.log(comments);
  const cardItems = comments.map((item, index) => {
    return (
      <Carousel.Item key={index}>
        <div className={classes.dummy}>
            <br/>
          <div className={classes.cards}>
            <Cards
              title={item.name}
              body={item.body}
              imageurl={item.url}
            />
            ;
          </div>
        </div>

        <Carousel.Caption>
          <h3>{item.name}</h3>
          <p>{item.email}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return (
    <Fragment>
      <div className={classes.testbox} id="testimonial">
        <div className="d-flex flex-column">
          <span className="heading">Testimonial</span>
          <span className="subheading">What client says about my work?</span>
          <Carousel>{cardItems}</Carousel>
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonial;
