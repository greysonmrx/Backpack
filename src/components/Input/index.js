import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useField } from "@unform/core";

import { Container } from "./styles";

function Input({ name, title, style, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Container error={!!error} style={style}>
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
      <span>{!!error ? error : title}</span>
    </Container>
  );
}

export default Input;

Input.propType = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  style: {},
};
