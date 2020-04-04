import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { MdEdit, MdDelete } from "react-icons/md";

import history from "../../services/history";
import { createNotification } from "../../services/notification";

import { remove } from "../../store/modules/timetable/actions";

import { Container, Top } from "./styles";

import Dropdown from "../Dropdown";
import ModalDelete from "../ModalDelete";

function Card({ data }) {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  function handleRemoveLesson() {
    const message = {
      title: "Aula removida com sucesso!",
      body: `A aula ${data.name} foi removida`,
    };

    createNotification(message);
    dispatch(remove(data.id, data.day));
  }

  return (
    <Container color={data.color}>
      <ModalDelete
        visible={visible}
        title="Excluir esta aula?"
        message="Se você excluir esta aula, ela vai desaparecer para sempre. Tem certeza que deseja continuar?"
        cancel={() => setVisible(false)}
        confirm={handleRemoveLesson}
      />
      <header>
        <Top>
          <h3>{data.name}</h3>
          <Dropdown
            options={[
              {
                action: () =>
                  history.push({
                    pathname: "/editlesson",
                    state: { data },
                  }),
                children: (
                  <>
                    <MdEdit />
                    <span>Editar esta aula</span>
                  </>
                ),
              },
              {
                action: () => setVisible(true),
                children: (
                  <>
                    <MdDelete />
                    <span>Excluir esta aula</span>
                  </>
                ),
              },
            ]}
          />
        </Top>
        <time>{data.time}</time>
      </header>
      <p>
        {data.classroom}
        {data.teacher && data.classroom ? `, ${data.teacher}` : data.teacher}
      </p>
    </Container>
  );
}

export default Card;

Card.propsTypes = {
  data: PropTypes.object.isRequired,
};
