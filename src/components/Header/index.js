import {
  Badge,
  Col,
  Container,
  ListGroup,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import "./style.scss";
import {
  Bell,
  Cart,
  ChevronLeft,
  GeoAlt,
  List,
  Power,
  Search,
} from "react-bootstrap-icons";
import Language from "../../assets/img/language.png";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../services/AuthContext";
const Header = () => {
  const { logout } = useAuth();
  return (
    <Fragment>
      <Container fluid>
        <Row className="top-bar">
          <Col className="left-logo" md={4} xs={12}>
            <h6>ORDERING FOR</h6>
            <h3>
              <GeoAlt size={20} /> Eagle Pharmacy - Dallas, TX
            </h3>
          </Col>
          <Col
            md={4}
            xs={5}
            className="d-flex align-content-center flex-wrap justify-content-md-center justify-content-start"
          >
            <h2 className="center-logo">Zelda</h2>
          </Col>
          <Col md={4} xs={7} className="right-top-list">
            <ListGroup horizontal className="right-top-list">
              <ListGroup.Item className="header-icon-btn">
                <Search size={15} />
              </ListGroup.Item>
              <ListGroup.Item className="header-icon-btn">
                <Bell size={15} />
                <Badge pill>10</Badge>
              </ListGroup.Item>
              <ListGroup.Item className="header-icon-btn">
                <Cart size={15} />
                <Badge pill>20</Badge>
              </ListGroup.Item>
              <ListGroup.Item className="header-icon-img">
                <img src={Language} alt="language" />
              </ListGroup.Item>
              <ListGroup.Item className="header-icon-profile">
                JL
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <div className="navbar-footer">
          <Row>
            <Col
              xs={{ order: 2 }}
              sm={{ order: 2 }}
              md={{ order: 1 }}
              className=" align-content-center d-flex flex-wrap"
            >
              <Link className="back-button" to="/">
                <ChevronLeft size={15} /> Back{" "}
              </Link>
            </Col>
            <Col
              xs={{ order: 1 }}
              sm={{ order: 1 }}
              md={{ order: 2 }}
              className="d-flex flex-wrap justify-content-md-center justify-content-start"
            >
              <Navbar collapseOnSelect expand="lg">
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                  <List color="#fff" />
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link className="active" href="#">
                      Products
                    </Nav.Link>
                    <Nav.Link href="#">Education</Nav.Link>
                    <Nav.Link href="#">Orders</Nav.Link>
                    <Nav.Link href="#">Zeldapro</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
            <Col
              xs={{ order: 3 }}
              sm={{ order: 3 }}
              md={{ order: 3 }}
              className="menu-last align-content-center d-flex flex-wrap justify-content-end"
            >
              <h3 onClick={logout}>
                <Power /> Logout{" "}
              </h3>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default Header;
