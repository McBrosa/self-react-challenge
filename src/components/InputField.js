import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InputField extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div>{name}</div>
        <div>
          {title}
          {message}
        </div>
      </div>
    );
  }
}

InputField.propTypes = {
  input: PropTypes.string,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.bool
};

InputField.defaultProps = {
  input: "",
  disabled: false
};
