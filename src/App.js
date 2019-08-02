import React, { Component } from "react";
import "./App.css";
import Name from "./components/Name";
import Birthdate from "./components/Birthdate";
import Address from "./components/Address";
import Sex from "./components/Sex";
import SimpleReactValidator from "simple-react-validator";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const initialState = {
  firstName: "",
  middleInitial: "",
  lastName: "",
  birthdate: new Date(),
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  gender: ""
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.validate = new SimpleReactValidator({ autoForceUpdate: this });
  }

  handleChange = e => {
    const { value, name } = e.target;
    if (name === "zip" && value.length > 5) return;
    this.setState({
      [name]: value
    });
  };

  handleBirthdateChange = birthdate => {
    this.setState({ birthdate });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.validate.allValid()) {
      console.log(this.state);
      this.setState(initialState);
      this.validate.hideMessages();
    } else {
      this.validate.showMessages();
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="App">
        <h2>Registration Form</h2>
        <Name
          handleChange={this.handleChange}
          validator={this.validate}
          firstName={this.state.firstName}
          middleInitial={this.state.middleInitial}
          lastName={this.state.lastName}
        />
        <Birthdate
          birthdate={this.state.birthdate}
          handleChange={this.handleBirthdateChange}
        />
        <Address
          handleChange={this.handleChange}
          validator={this.validate}
          zip={this.state.zip}
          address1={this.state.address1}
          address2={this.state.address2}
          city={this.state.city}
          state={this.state.state}
        />
        <Sex
          handleChange={this.handleChange}
          validator={this.validate}
          gender={this.state.gender}
        />
        <Button type="submit" value="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default App;
