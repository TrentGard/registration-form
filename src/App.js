import React, { Component } from "react";
import "./App.css";
import Name from "./components/Name";
import Birthdate from "./components/Birthdate";
import Address from "./components/Address";
import Sex from "./components/Sex";
import * as formik from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const { Formik, Field } = formik;

const schema = Yup.object({
  firstName: Yup.string()
    .min(2, "Must be between 2 and 50 characters!")
    .max(50, "Must be between 2 and 50 characters!")
    .required("First Name is required!"),
  middleInitial: Yup.string()
    .max(1, "Must be 1 character!"),
  lastName: Yup.string()
    .min(2, "Must be between 2 and 50 characters!")
    .max(50, "Must be between 2 and 50 characters!")
    .required("Last Name is required!"),
  address1: Yup.string().required("Address 1 is required!"),
  birthdate: Yup.date().required(new Date(), "Date of Birth is required!"),
  city: Yup.string().required("City is required!"),
  state: Yup.string().required("State is required!"),
  zip: Yup.string().required("Zip Code is required!")
});

const initialState = {
  firstName: "",
  middleInitial: "",
  lastName: "",
  birthdate: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  gender: ""
};

class App extends Component {
  state = initialState;

  handleBirthdateChange = birthdate => {
    this.setState({ birthdate });
  };

  render() {
    return (
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
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
        }}
      >
        {({ handleSubmit, handleChange, values, isValid, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <h2>Registration Form</h2>
            <small>Check the console for the data after submission.</small>
            <br />
            <br />
            <Name
              errors={errors}
              handleChange={handleChange}
              values={values}
              touched={touched}
            />
            <Birthdate
              errors={errors}
              values={values}
              handleChange={this.handleBirthdateChange}
              touched={touched}
              birthdate={this.state.birthdate}
            />
            <Address
              handleChange={handleChange}
              values={values}
              touched={touched}
              errors={errors}
            />
            <Sex
              handleChange={handleChange}
              values={values}
              errors={errors}
              touched={touched}
            />
            <Button type="submit" value="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default App;
