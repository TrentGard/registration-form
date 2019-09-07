import React from "react";
import DatePicker from "react-datepicker";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "react-datepicker/dist/react-datepicker.css";

function Birthdate(props) {
  return (
    <Form.Group>
      <Row>
        <Col>
          <Form.Label>Date of Birth: </Form.Label>{" "}
          <DatePicker
            className="form-control"
            id="birthdate"
            name="birthdate"
            selected={props.birthdate}
            onChange={props.handleChange}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            touched={props.touched}
            value={props.values.birthdate}
            isValid={!props.errors.birthdate && props.touched.birthdate}
            isInvalid={props.errors.birthdate && props.touched.birthdate}
          />
          {props.errors.birthdate && props.touched.birthdate ? (
            <div>{props.errors.birthdate}</div>
          ) : null}
        </Col>
      </Row>
    </Form.Group>
  );
}
export default Birthdate;
