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
  Empty,
  EditorContent,
  EditorScroll
} from "./styles";
import Dropdown from "../../components/Dropdown";
import ModalDelete from "../../components/ModalDelete";
import { remove, removeNote } from "../../store/modules/notebook/actions";
import history from "../../services/history";
import ModalCreateNote from "../../components/ModalCreateNote";
import ModalCreateNotebook from "../../components/ModalCreateNotebook";
import {
  createNote,
  edit,
  editNoteContent,
  editNote
} from "../../store/modules/notebook/actions";
import Editor from "../../components/Editor";
import { createNotification } from "../../services/notification";

function Notebook({ location }) {
  const notebooks = useSelector(state => state.notebook.notebooks);
  const [notebook, setNotebook] = useState(null);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [visibleCreate, setVisibleCreate] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleDeleteNote, setVisibleDeleteNote] = useState(false);
  const [currentNoteId, setCurrentNoteId] = useState(null);
  const [currentNote, setCurrentNote] = useState(null);
  const [currentNoteDescription, setCurrentNoteDescription] = useState(null);
  const [visibleEditNote, setVisibleEditNote] = useState(false);
  const {
    notebook: { id }
  } = Object(location.state);
  const [value, setValue] = useState();
  const [defaultValue, setDefaultValue] = useState();
  const [notes, setNotes] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentNoteId(null);
    setCurrentNote(null);
    setCurrentNoteDescription(null);
  }, [id]);

  useEffect(() => {
    const notebook = notebooks.filter(item => item.id === id)[0];

    setNotes(notebook.notes);
    setNotebook(notebook);
  }, [id, notebooks]);

  useEffect(() => {
    if (currentNoteId) {
      dispatch(
        editNoteContent({ id: currentNoteId, notebookId: id, content: value })
      );
    }
  }, [value, currentNoteId, dispatch, id]);

  function handleSelectNote(noteId, noteTitle, content, noteDescription) {
    setValue(content);
    setCurrentNoteId(noteId);
    setCurrentNote(noteTitle);
    setDefaultValue(content);
    setCurrentNoteDescription(noteDescription);
  }

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
    const message = {
      title: "Caderno removido com sucesso!",
      body: `O caderno ${notebook.name} foi removido`
    };

    createNotification(message);
    dispatch(remove(id));
    history.push("/");
  }

  function handleRemoveNote() {
    const message = {
      title: "Nota removida com sucesso!",
      body: `A nota ${currentNote} foi removida`
    };

    createNotification(message);
    dispatch(removeNote({ id, currentNoteId }));
    setCurrentNoteId(null);
    setCurrentNote(null);
    setCurrentNoteDescription(null);
  }

  function handleCreateNote(data) {
    const message = {
      title: "Nota criada com sucesso!",
      body: `A nota ${data.title} foi criada`
    };

    createNotification(message);
    dispatch(createNote(data, id));
  }

  function handleEditNotebook(data) {
    const message = {
      title: "Caderno editado com sucesso!",
      body: `O caderno ${data.name} foi editado`
    };

    createNotification(message);
    dispatch(edit({ ...data, id: id }));
  }

  function handleEditNote(data) {
    const message = {
      title: "Nota editada com sucesso!",
      body: `A nota ${data.title} foi editada`
    };

    createNotification(message);
    dispatch(editNote({ ...data, id, currentNoteId }));
    setCurrentNote(data.title);
    setCurrentNoteDescription(data.description);
  }

  return notebook ? (
    <Container>
      <ModalDelete
        visible={visibleDelete}
        title="Excluir este caderno?"
        message="Se você excluir este caderno, ele vai desaparecer para sempre. Tem certeza que deseja continuar?"
        cancel={() => setVisibleDelete(false)}
        confirm={handleRemoveNotebook}
      />
      <ModalDelete
        visible={visibleDeleteNote}
        title="Excluir esta nota?"
        message="Se você excluir esta nota, ela vai desaparecer para sempre. Tem certeza que deseja continuar?"
        cancel={() => setVisibleDeleteNote(false)}
        confirm={handleRemoveNote}
      />
      <ModalCreateNote
        visible={visibleCreate}
        title="Nova nota"
        message="Defina o título e a descrição da sua nova nota para criá-la!"
        cancel={() => setVisibleCreate(false)}
        confirm={handleCreateNote}
      />
      <ModalCreateNote
        visible={visibleEditNote}
        title="Editar nota"
        button="Salvar nota"
        message="Defina o título e a descrição da sua nova nota para editá-la!"
        cancel={() => setVisibleEditNote(false)}
        initialData={{
          title: currentNote,
          description: currentNoteDescription
        }}
        confirm={handleEditNote}
      />
      <ModalCreateNotebook
        visible={visibleEdit}
        title="Editar caderno"
        button="Salvar caderno"
        message="Defina o novo nome do seu caderno para editá-lo!"
        cancel={() => setVisibleEdit(false)}
        initialData={{
          name: notebook.name
        }}
        confirm={handleEditNotebook}
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
                  action: () => setVisibleEdit(true)
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
                  <Note
                    key={note.id}
                    active={currentNoteId === note.id}
                    onClick={() =>
                      handleSelectNote(
                        note.id,
                        note.title,
                        note.content,
                        note.description
                      )
                    }
                  >
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
      {currentNoteId ? (
        <EditorContent>
          <header>
            <h1>{currentNote}</h1>
            <Dropdown
              options={[
                {
                  children: (
                    <>
                      <MdCreate />
                      <span>Editar nota</span>
                    </>
                  ),
                  action: () => setVisibleEditNote(true)
                },
                {
                  children: (
                    <>
                      <MdDelete />
                      <span>Excluir nota</span>
                    </>
                  ),
                  action: () => setVisibleDeleteNote(true)
                }
              ]}
            />
          </header>
          <EditorScroll>
            <Editor initialValue={defaultValue} onChange={setValue} />
          </EditorScroll>
        </EditorContent>
      ) : (
        <Empty>
          <h1>Nenhuma nota selecionada</h1>
          <p>Selecione uma nota ou crie uma nova para começar a editá-la!</p>
        </Empty>
      )}
    </Container>
  ) : null;
}

export default Notebook;
