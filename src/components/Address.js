import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Address(props, errors) {
  return (
    <Form.Group>
      <Row>
        <Col>
          <Form.Label>Address 1: </Form.Label>
          <Form.Control
            name="address1"
            id="address1"
            onChange={props.handleChange}
            value={props.values.address1}
            isValid={!props.errors.address1 && props.touched.address1}
            isInvalid={props.errors.address1 && props.touched.address1}
          />
          {props.errors.address1 && props.touched.address1 ? (
            <div>{props.errors.address1}</div>
          ) : null}
        </Col>
        <Col>
          <Form.Label>Address 2: </Form.Label>
          <Form.Control
            name="address2"
            id="address2"
            onChange={props.handleChange}
            value={props.values.address2}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>City: </Form.Label>
          <Form.Control
            type="text"
            name="city"
            id="city"
            onChange={props.handleChange}
            value={props.values.city}
            isValid={!props.errors.city && props.touched.city}
            isInvalid={props.errors.city && props.touched.city}
          />
          {props.errors.city && props.touched.city ? (
            <div>{props.errors.city}</div>
          ) : null}
        </Col>
        <Col>
          <Form.Label>State: </Form.Label>
          <Form.Control
            as="select"
            name="state"
            id="state"
            onChange={props.handleChange}
            value={props.values.state}
            isValid={!props.errors.state && props.touched.state}
            isInvalid={props.errors.state && props.touched.state}
          >
            <option value="" />
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </Form.Control>
          {props.errors.state && props.touched.state ? (
            <div>{props.errors.state}</div>
          ) : null}
        </Col>
        <Col>
          <Form.Label>Zip: </Form.Label>
          <Form.Control
            type="number"
            name="zip"
            id="zip"
            value={props.values.zip}
            onChange={props.handleChange}
            isValid={!props.errors.zip && props.touched.zip}
            isInvalid={props.errors.zip && props.touched.zip}
          />
          {props.errors.zip && props.touched.zip ? (
            <div>{props.errors.zip}</div>
          ) : null}
        </Col>
      </Row>
    </Form.Group>
  );
}

export default Address;
