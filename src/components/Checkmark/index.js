import React from "react";
import { FaCheck } from "react-icons/fa";

import { Container } from "./styles";

function Checkmark({ ...rest }) {
  return (
    <Container>
      <input type="checkbox" {...rest} />
      <span>
        <FaCheck />
      </span>
    </Container>
  );
}

export default Checkmark;
