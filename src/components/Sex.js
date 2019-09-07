import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Sex(props) {
  return (
    <Form.Group>
      <Row>
        <Col>
          <Form.Label>Male:</Form.Label>{" "}
          <Form.Check
            inline
            type="radio"
            name="gender"
            value="Male"
            onChange={props.handleChange}
          />
        </Col>
        <Col>
          <Form.Label>Female:</Form.Label>{" "}
          <Form.Check
            inline
            type="radio"
            name="gender"
            value="Female"
            onChange={props.handleChange}
          />
        </Col>
        <Col>
          <Form.Label>Other:</Form.Label>{" "}
          <Form.Check
            inline
            type="radio"
            name="gender"
            value="Other"
            onChange={props.handleChange}
          />
        </Col>
      </Row>
    </Form.Group>
  );
}

export default Sex;
