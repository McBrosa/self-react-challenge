import React from "react";
import PropTypes from "prop-types";
import { Translation } from "react-i18next";
import styles from "./TextInput.module.scss";

const TextInput = params => {
  const renderLabel = () => {
    const { label, required, valid } = params;
    const requiredLabel =
      required && !valid ? (
        <span className={styles.requiredText}>
          <Translation ns="common">{t => t("form.required")}</Translation>
        </span>
      ) : (
        ""
      );

    return (
      <p className={styles.label}>
        {label} {requiredLabel}
      </p>
    );
  };

  const { valid, required, name, onChange } = params;

  return (
    <div>
      {renderLabel()}
      <input
        className={styles.container}
        name={name}
        type="text"
        onInput={onChange}
        required={required && !valid}
      ></input>
    </div>
  );
};

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

export default TextInput;
