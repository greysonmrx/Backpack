import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

import Card from "../Card";

function List({ data }) {
  return (
    <Container isToday={data.id === new Date().getDay()}>
      <h2>{data.title}</h2>
      {data.lessons.map((lesson) => (
        <Card key={lesson.id} data={lesson} />
      ))}
    </Container>
  );
}

export default List;

List.propsTypes = {
  data: PropTypes.object.isRequired,
};
