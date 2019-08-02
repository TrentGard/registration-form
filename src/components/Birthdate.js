import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";

function Birthdate(props) {
  return (
    <Form.Group>
      <Form.Label>
        Date of Birth:
        <Form.Row>
          <DatePicker
            className="form-control"
            selected={props.birthdate}
            onChange={props.handleChange}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />
        </Form.Row>
      </Form.Label>
    </Form.Group>
  );
}
export default Birthdate;
