import React from "react";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";

import {
  Container,
  Wrapper,
  Header,
  Button,
  Content,
  Scroll,
  Empty,
} from "./styles";

import history from "../../services/history";

import Board from "../../components/Board";

function Timetable() {
  const data = useSelector((state) => state.timetable.data);

  function handleEmptyDays() {
    let empty = true;

    data.forEach((day) => {
      if (day.lessons.length !== 0) {
        empty = false;
      }
    });

    return empty;
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
        <Button onClick={() => history.push("/addlesson")}>
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
            <Board data={data} />
          )}
        </Scroll>
      </Content>
    </Container>
  );
}

export default Timetable;
