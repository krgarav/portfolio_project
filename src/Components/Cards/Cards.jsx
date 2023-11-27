import { Fragment } from "react";
import { Card } from "react-bootstrap";

const Cards = (props) => {
  return (
    <Fragment>
      <Card style={{ width: "60%" }}>
        <Card.Img
          variant="top"
          style={{
            height: "200px",
          }}
          src={props.imageurl}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.email}
          </Card.Subtitle>
          <Card.Text>{props.body}</Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  );
};
export default Cards;
