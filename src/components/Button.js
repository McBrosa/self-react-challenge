import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  const { name, title, message } = props;
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

Banner.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string
};

Banner.defaultProps = {
  message: ""
};
