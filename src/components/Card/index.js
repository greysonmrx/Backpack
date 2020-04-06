import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { MdEdit, MdDelete } from "react-icons/md";
import { useDrag, useDrop } from "react-dnd";

import history from "../../services/history";
import { createNotification } from "../../services/notification";

import { remove, move } from "../../store/modules/timetable/actions";

import { Container, Top, Button } from "./styles";

import Dropdown from "../Dropdown";
import ModalDelete from "../ModalDelete";

function Card({ data, index, listIndex }) {
  const ref = useRef();

  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "CARD", index, listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover: (item, monitor) => {
      const draggedListIndex = item.listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex) return;

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) return;

      if (draggedIndex > targetIndex && draggedTop > targetCenter) return;

      dispatch(move(draggedListIndex, draggedIndex, targetIndex));

      item.index = targetIndex;
    },
  });

  dragRef(dropRef(ref));

  function handleRemoveLesson() {
    const message = {
      title: "Aula removida com sucesso!",
      body: `A aula ${data.name || "vaga"} foi removida`,
    };

    createNotification(message);
    dispatch(remove(data.id, data.day));
  }

  return (
    <Container color={data.color} ref={ref} isDragging={isDragging}>
      <ModalDelete
        visible={visible}
        title="Excluir esta aula?"
        message="Se você excluir esta aula, ela vai desaparecer para sempre. Tem certeza que deseja continuar?"
        cancel={() => setVisible(false)}
        confirm={handleRemoveLesson}
      />
      {data.isEmptyLesson ? (
        <>
          <h3>Aula vaga</h3>
          <Button onClick={() => setVisible(true)}>Excluir</Button>
        </>
      ) : (
        <>
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
            {data.teacher && data.classroom
              ? `, ${data.teacher}`
              : data.teacher}
          </p>
        </>
      )}
    </Container>
  );
}

export default Card;

Card.propsTypes = {
  data: PropTypes.object.isRequired,
};
