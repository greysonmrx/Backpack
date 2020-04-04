import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useField } from "@unform/core";
import { FaCheck } from "react-icons/fa";

import { Container } from "./styles";

function SelectColor({ name, options, style, ...rest }) {
  const radioRef = useRef([]);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: radioRef.current,
      path: "value",
      getValue(refs) {
        const checked = refs.find((ref) => ref.checked);

        return checked ? checked.value : null;
      },
      setValue(refs, value) {
        const item = refs.find((ref) => ref.value === value);

        if (item) {
          item.checked = true;
        }
      },
    });
  }, [fieldName, registerField]);

  return (
    <div>
      {options.map((option, index) => (
        <Container key={option.color} color={option.color}>
          <input
            name={fieldName}
            type="radio"
            ref={(elRef) => (radioRef.current[index] = elRef)}
            defaultChecked={defaultValue === option.color}
            value={option.color}
            {...rest}
          />
          <span>
            <FaCheck />
          </span>
        </Container>
      ))}
    </div>
  );
}

export default SelectColor;

SelectColor.propType = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SelectColor.defaultProps = {
  style: {},
};
