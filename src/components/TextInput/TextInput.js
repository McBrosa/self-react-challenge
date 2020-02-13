import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./TextInput.module.scss";

export default class TextInput extends Component {
  constructor(props) {
    super(props);
  }

  renderLabel() {
    const { label, required, valid } = this.props;
    const requiredLabel =
      required && !valid ? (
        <span className={styles.requiredText}>REQUIRED</span>
      ) : (
        ""
      );

    return (
      <p className={styles.label}>
        {label} {requiredLabel}
      </p>
    );
  }

  render() {
    const { valid, required, name, onChange } = this.props;

    return (
      <div>
        {this.renderLabel()}
        <input
          className={styles.container}
          name={name}
          type="text"
          onInput={onChange}
          required={required && !valid}
        ></input>
      </div>
    );
  }
}

TextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  valid: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

TextInput.defaultProps = {
  label: "",
  required: false,
  valid: true
};
