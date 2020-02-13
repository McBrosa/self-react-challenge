import React from "react";
import PropTypes from "prop-types";
import { FaRobot } from "react-icons/fa";
import styles from "./Banner.module.scss";

export default function Banner(props) {
  const { name, title, message } = props;
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <FaRobot size={26} />
        {name}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.message}>{message}</div>
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
