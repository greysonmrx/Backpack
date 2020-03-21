import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDescription, MdCreate, MdDelete } from "react-icons/md";
import { format, formatDistance, differenceInDays } from "date-fns";
import pt from "date-fns/locale/pt-BR";

import {
  Container,
  Content,
  Wrapper,
  Header,
  Title,
  Notes,
  Scroll,
  Note,
  Empty
} from "./styles";
import Dropdown from "../../components/Dropdown";
import ModalDelete from "../../components/ModalDelete";
import { remove } from "../../store/modules/notebook/actions";
import history from "../../services/history";
import ModalCreateNote from "../../components/ModalCreateNote";
import { createNote } from "../../store/modules/notebook/actions";

function Notebook({ location }) {
  const notebooks = useSelector(state => state.notebook.notebooks);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [visibleCreate, setVisibleCreate] = useState(false);
  const { notebook } = Object(location.state);
  const [notes, setNotes] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const { notes: allNotes } = notebooks.filter(
      item => item.id === notebook.id
    )[0];

    setNotes(allNotes);
  }, [notebook.id, notebooks]);

  function handleDateFormated(date) {
    return differenceInDays(new Date(date), new Date())
      ? format(new Date(date), "d 'de' MMMM 'de' yyyy", { locale: pt })
      : formatDistance(new Date(date), new Date(), {
          locale: pt,
          addSuffix: true
        });
  }

  function handleNumberOfNotes(number) {
    return number === 1 ? `${number} nota` : `${number} notas`;
  }

  function handleRemoveNotebook() {
    dispatch(remove(notebook.id));
    history.push("/");
  }

  return (
    <Container>
      <ModalDelete
        visible={visibleDelete}
        title="Excluir este caderno?"
        message="Se você excluir este caderno, ele vai desaparecer para sempre. Tem certeza que deseja continuar?"
        cancel={() => setVisibleDelete(false)}
        confirm={handleRemoveNotebook}
      />
      <ModalCreateNote
        visible={visibleCreate}
        title="Nova nota"
        message="Defina o título e a descrição da sua nova nota para criá-la!"
        cancel={() => setVisibleCreate(false)}
        confirm={data => dispatch(createNote(data, notebook.id))}
      />
      <Content>
        <Wrapper>
          <Header>
            <Title>{notebook.name}</Title>
            <Dropdown
              options={[
                {
                  children: (
                    <>
                      <MdDescription />
                      <span>Criar nova nota</span>
                    </>
                  ),
                  action: () => setVisibleCreate(true)
                },
                {
                  children: (
                    <>
                      <MdCreate />
                      <span>Editar caderno</span>
                    </>
                  ),
                  action: () => {}
                },
                {
                  children: (
                    <>
                      <MdDelete />
                      <span>Excluir caderno</span>
                    </>
                  ),
                  action: () => setVisibleDelete(true)
                }
              ]}
            />
          </Header>
          <span>{handleNumberOfNotes(notes.length)}</span>
        </Wrapper>
        <Notes>
          <Scroll>
            {notes.length === 0 ? (
              <Empty>
                <span>Clique no botão de opções para criar uma nova nota</span>
              </Empty>
            ) : (
              <>
                {notes.map(note => (
                  <Note key={note.id}>
                    <h3>{note.title}</h3>
                    <time>{handleDateFormated(note.time)}</time>
                    <p>{note.description}</p>
                  </Note>
                ))}
              </>
            )}
          </Scroll>
        </Notes>
      </Content>
    </Container>
  );
}

export default Notebook;
