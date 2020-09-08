import React from "react";
import { Form, Button, Col } from "react-bootstrap";

const AddForm = () => {
  var areaList = [
    "Artificial intelligence",
    "Systems",
    "Theory",
    "Interdisciplinary Areas",
  ];
  var subAreaList = [
    "Computer vision",
    "Machine learning & data mining",
    "Natural language processing",
    "The Web & information retrieval",
    "Computer architecture",
    "Computer networks",
    "Computer security",
    "Databases",
    "Design automation",
    "Embedded & real-time systems",
    "High-performance computing",
    "Mobile computing",
    "Measurement & perf. analysis",
    "Operating systems",
    "Programming languages",
    "Software engineering",
    "Algorithms & complexity",
    "Cryptography",
    "Logic & verification",
    "Comp. bio & bioinformatics",
    "Computer graphics",
    "Economics & computation",
    "Human-computer interaction",
    "Robotics",
    "Visualization",
  ];

  return (
    <>
      <div className="m-5">
        <Form action="http://localhost:5000/add/conference" method="post">
          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.formGrid">
              <Form.Label>Fullname</Form.Label>
              <Form.Control
                name="fullname"
                type="text"
                placeholder="Enter fullname"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="exampleForm.formGrid">
              <Form.Label>Acronym</Form.Label>
              <Form.Control name="acronym" type="text" placeholder="Enter acronym" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Area</Form.Label>
            <Form.Control name="area" as="select" custom>
              {areaList.map((area) => (
                <option>{area}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Sub-Area</Form.Label>
            <Form.Control name="subarea" as="select" custom>
              {subAreaList.map((subarea) => (
                <option>{subarea}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>URL</Form.Label>
            <Form.Control name="url" type="url" placeholder="" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control name="desc" as="textarea" rows="2" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="I agree to have properly defined this conference."
            required/>
          </Form.Group>

          <Button variant="primary" type="submit" >
            Add Conference
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddForm;
