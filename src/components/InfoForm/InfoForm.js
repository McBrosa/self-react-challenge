import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Banner, TextInput } from "../";
import styles from "./InfoForm.module.scss";
import arrowSvg from "../../assets/White_Arrow.svg";

class InfoForm extends Component {
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
    const { t } = this.props;

    return (
      <div className={styles.container}>
        <Banner title={t("banner.title")} message={t("banner.message")} />
        <form
          className={styles.form}
          onSubmit={this.handleSubmit}
          noValidate
          autoComplete="off"
        >
          <TextInput
            name="firstName"
            label={t("form.firstName")}
            required
            valid={valid.firstName}
            onChange={this.handleChange}
          />
          <TextInput
            name="lastName"
            label={t("form.lastName")}
            required
            valid={valid.lastName}
            onChange={this.handleChange}
          />
          <TextInput
            name="address"
            label={t("form.address")}
            required
            valid={valid.address}
            onChange={this.handleChange}
          />
          <TextInput
            name="additionalAddress"
            label={t("form.additionalAddress")}
            onChange={this.handleChange}
          />
          <button className={styles.button} type="submit">
            {t("form.next")}
            <img src={arrowSvg} className={styles.arrow} alt="next arrow" />
          </button>
        </form>
      </div>
    );
  }
}

export default withTranslation("common")(InfoForm);
