import { Col, Container, Row } from "react-bootstrap";
import {
  HeartPulse,
  InfoCircle,
  People,
  PersonLinesFill,
  Prescription2,
} from "react-bootstrap-icons";
import "./style.scss";

const Footer = () => {
  return (
    <Container fluid className="footer-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <Row className="d-flex flex-wrap">
            <Col className="flex-column d-flex align-content-center flex-wrap">
              <Prescription2 size="45" />
              <h6>Vaccine Storage</h6>
            </Col>
            <Col className="flex-column d-flex align-content-center flex-wrap">
              <HeartPulse size="45" />
              <h6>Responsibilities</h6>
            </Col>
            <Col className="flex-column d-flex align-content-center flex-wrap">
              <People size="45" />
              <h6>Resources</h6>
            </Col>
            <Col className="flex-column d-flex align-content-center flex-wrap">
              <InfoCircle size="45" />
              <h6>Information</h6>
            </Col>
            <Col className="flex-column d-flex align-content-center flex-wrap">
              <PersonLinesFill size="45" />
              <h6>Contact</h6>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
