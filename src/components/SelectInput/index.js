import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useField } from "@unform/core";

import { Container } from "./styles";

function SelectInput({ name, title, style, options, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, registerField, error, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: "value"
    });
  }, [fieldName, registerField]);

  return (
    <Container error={!!error} style={style}>
      <select ref={selectRef} defaultValue={defaultValue} {...rest}>
        {options.map(option => (
          <option key={option.id}>{option.value}</option>
        ))}
      </select>
      <span>{!!error ? error : title}</span>
    </Container>
  );
}

export default SelectInput;

SelectInput.propType = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  options: PropTypes.arrayOf(PropTypes.object).isRequired
};

SelectInput.defaultProps = {
  style: {}
};
