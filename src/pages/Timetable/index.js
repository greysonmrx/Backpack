import React, { useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

import {
  Container,
  Wrapper,
  Header,
  Button,
  Content,
  Scroll,
  Grid,
  Cards,
  Card,
  Top,
  Empty
} from "./styles";

function Timetable() {
  const [data] = useState([]);

  function handleEmptyDays() {
    let empty = true;

    data.forEach(day => {
      if (day.lessons.length !== 0) {
        empty = false;
      }
    });

    return empty;
  }

  function handleRenderDays() {
    let cards = [];

    data.forEach(day => {
      if (day.lessons.length !== 0) {
        cards.push(
          <Cards key={day.id}>
            <h2>{day.name}</h2>
            {day.lessons.map(lesson => (
              <Card key={lesson.id} color={lesson.color}>
                <header>
                  <Top>
                    <h3>{lesson.name}</h3>
                    <button>
                      <MdMoreHoriz />
                    </button>
                  </Top>
                  <time>{lesson.time}</time>
                </header>
                <p>
                  {lesson.classroom}
                  {lesson.teacher && lesson.classroom
                    ? `, ${lesson.teacher}`
                    : lesson.teacher}
                </p>
              </Card>
            ))}
          </Cards>
        );
      }
    });

    return cards;
  }

  return (
    <Container>
      <Header>
        <Wrapper>
          <h1>Calendário</h1>
          <p>
            Aqui você pode ver sua programação semanal. Clique com o botão
            direito do mouse nas lições para editá-las ou excluí-las.
          </p>
        </Wrapper>
        <Button>
          <FaPlus />
          <span>Nova aula</span>
        </Button>
      </Header>
      <Content>
        <Scroll>
          {handleEmptyDays() ? (
            <Empty>
              <h1>Não há nada por aqui</h1>
              <p>
                Clique no botão que está no canto superior direito para
                adicionar uma nova aula!
              </p>
            </Empty>
          ) : (
            <Grid>{handleRenderDays()}</Grid>
          )}
        </Scroll>
      </Content>
    </Container>
  );
}

export default Timetable;