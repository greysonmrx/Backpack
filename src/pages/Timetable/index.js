import React from "react";
import { useSelector } from "react-redux";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";

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
import history from "../../services/history";
import Dropdown from "../../components/Dropdown";
import { remove } from "../../store/modules/timetable/actions";

function Timetable() {
  const data = useSelector(state => state.timetable.data);
  const dispatch = useDispatch();

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
                    <Dropdown
                      options={[
                        {
                          action: () =>
                            console.log("Editar aula com o id: ", lesson.id),
                          children: (
                            <>
                              <MdEdit />
                              <span>Editar esta aula</span>
                            </>
                          )
                        },
                        {
                          action: () => dispatch(remove(lesson.id, day.name)),
                          children: (
                            <>
                              <MdDelete />
                              <span>Excluir esta aula</span>
                            </>
                          )
                        }
                      ]}
                    />
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
            <Grid>{handleRenderDays()}</Grid>
          )}
        </Scroll>
      </Content>
    </Container>
  );
}

export default Timetable;
