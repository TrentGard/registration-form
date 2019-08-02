import React from "react";
import Form from "react-bootstrap/Form";

function Address(props) {
  return (
    <>
      <Form.Group>
        <Form.Label>
          Address 1:{" "}
          <Form.Control
            type="text"
            name="address1"
            onChange={props.handleChange}
            value={props.address1}
          />
          {props.validator.message("Address", props.address1, "required")}
        </Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label>
          Address 2:{" "}
          <Form.Control
            type="text"
            name="address2"
            onChange={props.handleChange}
            value={props.address2}
          />
          {props.validator.message("", props.address1, "required|max:50")}
        </Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label>
          City:{" "}
          <Form.Control
            type="text"
            name="city"
            onChange={props.handleChange}
            value={props.city}
          />
          {props.validator.message("City", props.city, "required|alpha_space")}
        </Form.Label>
        <Form.Label>
          State:{" "}
          <Form.Control
            as="select"
            type="text"
            name="state"
            onChange={props.handleChange}
            value={props.state}
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
          {props.validator.message("State", props.state, "required|alpha")}
        </Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label>
          Zip:{" "}
          <Form.Control
            type="number"
            name="zip"
            max="99999"
            value={props.zip}
            onChange={props.handleChange}
          />
          {props.validator.message("Zip", props.zip, "required|numeric")}
        </Form.Label>
      </Form.Group>
    </>
  );
}

export default Address;
