import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

import List from "../List";

function Board({ data }) {
  return (
    <Container>
      {data.map((day, index) => (
        <List key={day.id} data={day} index={index} />
      ))}
    </Container>
  );
}

export default Board;

Board.propsTypes = {
  data: PropTypes.object.isRequired,
};
