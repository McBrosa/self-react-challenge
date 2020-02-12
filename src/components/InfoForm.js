import React, { Component } from "react";
import PropTypes from "prop-types";
import Banner from "./Banner/Banner";
import { Button, TextField } from "@material-ui/core";

export default class InfoForm extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <Banner
          name="GIANT ROBOT LTD."
          title="Welcome"
          message="Please tell us a bit about yourself to get started"
        />
        <form noValidate autoComplete="off">
          <TextField id="first-name" label="FIRST NAME" variant="outlined" />
          <TextField id="last-name" label="LAST NAME" variant="outlined" />
          <TextField id="address-1" label="ADDRESS" variant="outlined" />
          <TextField
            id="address-2"
            label="ADDRESS (OPTIONAL)"
            variant="outlined"
          />
        </form>
        <Button>Next</Button>
      </div>
    );
  }
}

InfoForm.propTypes = {
  input: PropTypes.string,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.bool
};

InfoForm.defaultProps = {
  input: "",
  disabled: false
};
