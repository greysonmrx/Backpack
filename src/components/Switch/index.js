import React from "react";
import PropTypes from "prop-types";

import { Container, SliderInput, Slider } from "./styles";

export default function Switch({ enable, onChange }) {
  return (
    <Container>
      <SliderInput type="checkbox" checked={enable} onChange={onChange} />
      <Slider />
    </Container>
  );
}

Switch.propTypes = {
  enable: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};
