import React from "react";
import { Form, Button} from "react-bootstrap";

const FetchPapers = (props) => {
  return (
    <div className="m-5">
      <Form
        action="http://localhost:5000/get/papers/"
        method="post"
        if-match="*"
      >
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Select Conference to Update</Form.Label>
          <Form.Control name="id" as="select">
            {props.items.map((conference) => (
              <option value={conference.acronym} type="text">
                {conference.acronym}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="I want to get the papers for this conference. I acknoledge this might take a while"
             required/>
          </Form.Group>
        <Button variant="primary" type="submit">
          Choose Conference
        </Button>
      </Form>
    </div>
  );
};

export default FetchPapers;
