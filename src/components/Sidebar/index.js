import { Accordion, Card, Form } from "react-bootstrap";
import "./style.scss";
const HeaderArray = [
  "Applications",
  "Manufacturer Name",
  "Strength",
  "Volume",
  "Active Ingredients",
  "Brand",
  "Dosage Form",
  "Generic Drug Code",
  "Latex Free Indicator",
];
const bodyArray = [
  "lorem Ipsum 1",
  "lorem Ipsum 2",
  "lorem Ipsum 3",
  "lorem Ipsum 4",
  "lorem Ipsum 5",
];
const Sidebar = () => {
  return (
    <Card>
      <Card.Body>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="top-most-heading">
              Sort By: Relevance
            </Accordion.Header>
            <Accordion.Body className="top-most-body">
              <Accordion defaultActiveKey={3} className="second-level">
                {HeaderArray.map((item, key) => {
                  return (
                    <Accordion.Item eventKey={key} key={key}>
                      <Accordion.Header>{item}</Accordion.Header>
                      <Accordion.Body>
                        {bodyArray.map((value, index) => {
                          return (
                            <Form.Check // prettier-ignore
                              key={index}
                              type={"checkbox"}
                              id={index}
                              label={value}
                            />
                          );
                        })}
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );
};
export default Sidebar;
