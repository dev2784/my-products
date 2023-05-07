import { Button, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./style.scss";
import DummyImage from "../../assets/img/dummy.jpg";
import { useState } from "react";
import { Heart, Star } from "react-bootstrap-icons";

const SingleProduct = (props) => {
  const { data } = props;
  const [style, setStyle] = useState({ display: "none" });
  const [style1, setStyle1] = useState({ display: "block" });
  const onHover = () => {
    setStyle({ display: "block" });
    setStyle1({ display: "none" });
  };

  const onHoverOut = () => {
    setStyle({ display: "none" });
    setStyle1({ display: "block" });
  };
  return (
    <Card className="product-card">
      <div
        className="img-section"
        onMouseEnter={() => onHover()}
        onMouseLeave={() => onHoverOut()}
      >
        <Star className="like-section" />
        <Heart className="save-section" />
        <img
          className="card-image"
          style={style1}
          src={data.image}
          alt={data.name}
        />
        <img
          className="card-image"
          style={style}
          src={DummyImage}
          alt={data.name}
        />
      </div>
      <Card.Body>
        <OverlayTrigger
          placement={"top"}
          overlay={
            <Tooltip id={`tooltip-${data.title}`}>
              <strong>{data.title}</strong>
            </Tooltip>
          }
        >
          <Card.Title>{data.title}</Card.Title>
        </OverlayTrigger>
        <Card.Text>Category: {data.category}</Card.Text>
        <h6 className="price">
          ${data.price} <span>${Math.round(data.price + 20)}</span>
        </h6>
        <Button className="btn-prime card-button">Add</Button>
      </Card.Body>
    </Card>
  );
};
export default SingleProduct;
