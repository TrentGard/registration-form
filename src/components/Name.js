import React from "react";
import Form from "react-bootstrap/Form";

function Name(props) {
  return (
    <Form.Group>
      <Form.Label>
        First Name:
        <Form.Control
          type="text"
          name="firstName"
          id="first"
          onChange={props.handleChange}
          value={props.firstName}
        />
        {props.validator.message(
          "First Name",
          props.firstName,
          "required|alpha"
        )}
      </Form.Label>
      <Form.Label>
        Middle Initial:{" "}
        <Form.Control
          type="text"
          name="middleInitial"
          id="middle"
          onChange={props.handleChange}
          value={props.middleInitial}
        />
        {props.validator.message(
          "Middle Initial",
          props.middleInitial,
          "required|alpha"
        )}
      </Form.Label>
      <Form.Label>
        Last Name:{" "}
        <Form.Control
          type="text"
          name="lastName"
          id="last"
          onChange={props.handleChange}
          value={props.lastName}
        />
        {props.validator.message("Last Name", props.lastName, "required|alpha")}
      </Form.Label>
    </Form.Group>
  );
}

export default Name;
