import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MdDescription, MdCreate, MdDelete } from "react-icons/md";

import {
  Container,
  Content,
  Wrapper,
  Header,
  Title,
  Notes,
  Scroll,
  Note
} from "./styles";
import Dropdown from "../../components/Dropdown";
import ModalDelete from "../../components/ModalDelete";
import { remove } from "../../store/modules/notebook/actions";
import history from "../../services/history";

function Notebook({ location }) {
  const [visible, setVisible] = useState(false);
  const { notebook } = Object(location.state);
  const dispatch = useDispatch();

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
        visible={visible}
        title="Excluir este caderno?"
        message="Se você excluir este caderno, ele vai desaparecer para sempre. Tem certeza que deseja continuar?"
        cancel={() => setVisible(false)}
        confirm={handleRemoveNotebook}
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
                  action: () => {}
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
                  action: () => setVisible(true)
                }
              ]}
            />
          </Header>
          <span>{handleNumberOfNotes(notebook.notes.length)}</span>
        </Wrapper>
        <Notes>
          <Scroll>
            {notebook.notes.map(note => (
              <Note key={note.id}>
                <h3>{note.title}</h3>
                <time>{note.time}</time>
                <p>{note.description}</p>
              </Note>
            ))}
          </Scroll>
        </Notes>
      </Content>
    </Container>
  );
}

export default Notebook;
