import React from "react";
import PropTypes from "prop-types";
import robotSvg from "../../assets/GiantRobotLTD_Logo.svg";
import styles from "./Banner.module.scss";

export default function Banner(props) {
  const { title, message } = props;
  return (
    <div className={styles.container}>
      <img src={robotSvg} className={styles.logo} alt="robot head" />
      <div className={styles.title}>{title}</div>
      <div className={styles.message}>{message}</div>
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string
};

Banner.defaultProps = {
  message: ""
};
