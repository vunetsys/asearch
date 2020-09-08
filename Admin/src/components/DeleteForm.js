import React from "react";
import { Form, Button} from "react-bootstrap";


const DeleteForm = (props) => {

  return (
    <div className="m-5">
      <Form action="http://localhost:5000/delete/conference/" method="post" if-match="*">
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Select Conference to delete</Form.Label>
          <Form.Control name="id"as="select">
          {props.items.map((conference) => (
              <option value={conference['_id']} type="text">{conference.acronym}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="I want to delete this conference."
             required/>
          </Form.Group>
        <Button variant="danger" type="submit" onClick={() => alert('Deleted Succesfully!')}>
            Delete Conference
        </Button>
      </Form>
    </div>
  );
};

export default DeleteForm;
