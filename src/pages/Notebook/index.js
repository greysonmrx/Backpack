import React from "react";
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

function Notebook({ location }) {
  const { notebook } = Object(location.state);

  function handleNumberOfNotes(number) {
    return number === 1 ? `${number} nota` : `${number} notas`;
  }

  return (
    <Container>
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
                  action: () => {}
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
