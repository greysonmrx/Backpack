import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

import Card from "../Card";

function List({ data, index: listIndex }) {
  return (
    <Container
      isToday={data.id === new Date().getDay()}
      hasLessons={data.lessons.length !== 0}
    >
      <h2>{data.name}</h2>
      {data.lessons.map((lesson, index) => (
        <Card
          key={lesson.id}
          data={lesson}
          index={index}
          listIndex={listIndex}
        />
      ))}
    </Container>
  );
}

export default List;

List.propsTypes = {
  data: PropTypes.object.isRequired,
};
