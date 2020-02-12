import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Button.css";

let cx = classNames.bind(styles);

export default function Banner(props) {
  const { name, title, message } = props;
  return (
    <div className={cx}>
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
