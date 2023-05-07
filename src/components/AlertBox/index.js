import { Alert } from "react-bootstrap";

const AlertBox = (props) => {
  const { variant, setShow, message } = props;
  return (
    <Alert variant={variant} onClose={() => setShow(false)} dismissible>
      {message}
    </Alert>
  );
};
export default AlertBox;
