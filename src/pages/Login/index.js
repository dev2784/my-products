import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import "./style.scss";
import { Link } from "react-router-dom";
import { PostData } from "../../services/api";
import useAuth from "../../services/AuthContext";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import AlertBox from "../../components/AlertBox";
import Loader from "../../components/Loader";
const Login = () => {
  const { login } = useAuth();
  const [variant, setVariant] = useState("success");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = async (data) => {
    setLoading(true);
    try {
      const response = await PostData("auth/login", {
        username: "mor_2314",
        password: "83r5^_",
      });
      setVariant("success");
      setMessage("Login success");
      setShow(true);
      setLoading(false);
      login({ token: response.token });
    } catch (error) {
      setVariant("danger");
      setMessage(error.message);
      setShow(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, [show]);
  return (
    <div className="login-section">
      <Container>
        <Row className="justify-content-md-end justify-content-center">
          <Col xs="12" md="6">
            <Card className="pt-3 pb-3">
              <Card.Body>
                <h2>Sign In</h2>
                <p className="title-desc">
                  Login or Register below to start placing your order
                </p>
                {show && (
                  <AlertBox
                    variant={variant}
                    setShow={setShow}
                    message={message}
                  />
                )}
                {loading && <Loader />}
                <form onSubmit={handleSubmit((data) => submit(data))}>
                  <Form.Group className="mb-4" controlId="usernameGroup">
                    <FloatingLabel
                      controlId="username"
                      label="Username"
                      className="mb-3"
                    >
                      <Form.Control
                        {...register("username", { required: true })}
                        aria-invalid={errors.username ? "true" : "false"}
                        className="input"
                        type="text"
                        placeholder="xyz"
                      />

                      {errors.username?.type === "required" && (
                        <p className="error" role="alert">
                          UserName is required
                        </p>
                      )}
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group className="mb-5" controlId="passwordGroup">
                    <FloatingLabel
                      controlId="password"
                      label="Password"
                      className="mb-3"
                    >
                      <Form.Control
                        {...register("password", { required: true })}
                        aria-invalid={errors.password ? "true" : "false"}
                        className="input"
                        type="password"
                        placeholder="password"
                      />
                      {errors.password?.type === "required" && (
                        <p className="error" role="alert">
                          Password is required
                        </p>
                      )}
                    </FloatingLabel>
                  </Form.Group>
                  <Row className="align-items-center">
                    <Col>
                      <Button type="submit" className="btn-prime">
                        Submit
                      </Button>
                    </Col>
                    <Col>
                      <p>
                        Dont have an account? <Link to={"/login"}>Create</Link>
                      </p>
                    </Col>
                  </Row>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
