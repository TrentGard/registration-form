import React from "react";
import Form from "react-bootstrap/Form";

function Sex(props) {
  return (
    <Form.Group>
      <Form.Label>
        Male:{" "}
        <Form.Check
          inline
          type="radio"
          name="gender"
          value="Male"
          onChange={props.handleChange}
        />
      </Form.Label>
      <Form.Label>
        Female:{" "}
        <Form.Check
          inline
          type="radio"
          name="gender"
          value="Female"
          onChange={props.handleChange}
        />
      </Form.Label>
      <Form.Label>
        Other:{" "}
        <Form.Check
          inline
          type="radio"
          name="gender"
          value="Other"
          onChange={props.handleChange}
        />
      </Form.Label>
      {props.validator.message("Sex", props.gender, "required|alpha")}
    </Form.Group>
  );
}

export default Sex;
