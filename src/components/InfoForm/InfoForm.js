import React, { Component } from "react";
import PropTypes from "prop-types";
import { Banner, TextInput } from "../";
import { Button, TextField } from "@material-ui/core";
import styles from "./InfoForm.module.scss";
import { FaArrowRight } from "react-icons/fa";

export default class InfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      additionalAddress: "",
      valid: {
        firstName: true,
        lastName: true,
        address: true
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const valid = value !== "";
    this.setState({
      [name]: value,
      valid: {
        ...this.state.valid,
        [name]: valid
      }
    });
  }

  handleSubmit(event) {
    if (this.validate()) {
      const { firstName, lastName, address, additionalAddress } = this.state;
      alert(`${firstName} ${lastName}\n${address}\n${additionalAddress}
    `);
    }
    event.preventDefault();
  }

  validate() {
    const validCopy = Object.assign({}, this.state.valid);
    let valid = true;
    Object.keys(validCopy).forEach(key => {
      if (this.state[key] === "") {
        validCopy[key] = false;
        valid = false;
      }
    });

    this.setState({
      valid: validCopy
    });

    return valid;
  }

  render() {
    const { valid } = this.state;
    return (
      <div className={styles.container}>
        <Banner
          name="GIANT ROBOT LTD."
          title="Welcome"
          message="Please tell us a bit about yourself to get started"
        />
        <form
          className={styles.form}
          onSubmit={this.handleSubmit}
          noValidate
          autoComplete="off"
        >
          <TextInput
            name="firstName"
            label="FIRST NAME"
            required
            valid={valid.firstName}
            onChange={this.handleChange}
          />
          <TextInput
            name="lastName"
            label="LAST NAME"
            required
            valid={valid.lastName}
            onChange={this.handleChange}
          />
          <TextInput
            name="address"
            label="ADDRESS"
            required
            valid={valid.address}
            onChange={this.handleChange}
          />
          <TextInput
            name="additionalAddress"
            label="ADDRESS (OPTIONAL)"
            onChange={this.handleChange}
          />
          <button className={styles.button} type="submit">
            Next <FaArrowRight />
          </button>
        </form>
      </div>
    );
  }
}
