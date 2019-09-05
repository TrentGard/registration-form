import React from "react";
import Form, { Group } from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Formik, Field } from "formik";

function Name(props) {
  return (
    <Group>
      <Row>
        <Col>
          <Form.Label>First Name: </Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            id="first"
            onChange={props.handleChange}
            value={props.values.firstName}
            isValid={!props.errors.firstName && props.touched.firstName}
            isInvalid={props.errors.firstName && props.touched.firstName}
          />
          {props.errors.firstName && props.touched.firstName ? (
            <div>{props.errors.firstName}</div>
          ) : null}
        </Col>
        <Col>
          <Form.Label>Middle Initial: </Form.Label>
          <Form.Control
            type="text"
            name="middleInitial"
            id="middle"
            onChange={props.handleChange}
            value={props.values.middleInitial}
            isValid={!props.errors.middleInitial && props.touched.middleInitial}
            isInvalid={
              props.errors.middleInitial && props.touched.middleInitial
            }
          />
          {props.errors.middleInitial && props.touched.middleInitial ? (
            <div>{props.errors.middleInitial}</div>
          ) : null}
        </Col>
        <Col>
          <Form.Label>Last Name: </Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            id="last"
            onChange={props.handleChange}
            value={props.values.lastName}
            isValid={!props.errors.lastName && props.touched.lastName}
            isInvalid={props.errors.lastName && props.touched.lastName}
          />
          {props.errors.lastName && props.touched.lastName ? (
            <div>Last Name is a required field</div>
          ) : null}
        </Col>
      </Row>
    </Group>
  );
}

export default Name;
