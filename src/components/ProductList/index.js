import { Card, Col, Row } from "react-bootstrap";
import "./style.scss";
import { GridFill, ListTask } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { getData } from "../../services/api";
import SingleProduct from "../SingleProduct";
import AlertBox from "../AlertBox";
import Loader from "../Loader";
const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const [variant, setVariant] = useState("success");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await getData();
      setProductData(response);
      setLoading(false);
    } catch (error) {
      setVariant("danger");
      setMessage(error.message);
      setShow(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, [show]);
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col className="d-flex justify-content-start align-content-center flex-wrap">
            <h3 className="product-count">
              All products | <span>{productData.length} items found</span>
            </h3>
          </Col>
          <Col className="d-flex justify-content-end align-content-center flex-wrap">
            <ListTask className="inactive-icon" size={22} />
            <GridFill size={22} className="active-icon" />
          </Col>
        </Row>
        <Row className="product-container">
          {show && (
            <AlertBox variant={variant} setShow={setShow} message={message} />
          )}

          {loading && <Loader />}
          {productData.length ? (
            productData.map((item) => {
              return (
                <Col md={6} lg={3} className="mb-4" key={item.id}>
                  <SingleProduct data={item} />
                </Col>
              );
            })
          ) : (
            <Col className="d-flex flex-wrap justify-content-center align-content-center">
              <h3 className="no-data-message">No Data Found</h3>
            </Col>
          )}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProductList;
