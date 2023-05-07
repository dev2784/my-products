import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import ProductList from "../../components/ProductList";
import { ChevronCompactUp } from "react-bootstrap-icons";
import "./style.scss";

const Products = () => {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <ProductList />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            sm={4}
            md={2}
            className="to-top flex-column d-flex flex-wrap justify-content-center"
          >
            <ChevronCompactUp />
            <p>Go To Top</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
export default Products;
