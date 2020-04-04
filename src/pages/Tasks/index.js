import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";

import {
  Container,
  Header,
  Wrapper,
  Button,
  Content,
  Scroll,
  Empty,
  List,
  Task,
  Left,
  Right,
  Action,
} from "./styles";
import Checkmark from "../../components/Checkmark";
import history from "../../services/history";
import { toggleDone, remove } from "../../store/modules/task/actions";
import ModalDelete from "../../components/ModalDelete";
import { createNotification } from "../../services/notification";

function Tasks() {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();
  const [currentTask, setCurrentTask] = useState(0);

  function handleRemoveTask() {
    const message = {
      title: "Tarefa removida com sucesso!",
      body: `A tarefa ${currentTask.title} foi removida`,
    };

    createNotification(message);
    dispatch(remove(currentTask.id));
  }

  function handleRenderTasks() {
    return tasks.map((task) => (
      <Task key={task.id}>
        <Left checked={task.done ? 1 : 0}>
          <label>
            <Checkmark
              defaultChecked={task.done ? 1 : 0}
              onClick={() => dispatch(toggleDone(task.id))}
            />
            <p>{task.title}</p>
          </label>
        </Left>
        <Right>
          <Action
            color="#039BE5"
            onClick={() =>
              history.push({ pathname: "/edittask", state: { task } })
            }
          >
            <MdEdit />
          </Action>
          <Action
            color="#e53935"
            onClick={() => setCurrentTask({ id: task.id, title: task.title })}
          >
            <MdDelete />
          </Action>
        </Right>
      </Task>
    ));
  }

  return (
    <Container>
      <ModalDelete
        visible={!!currentTask}
        title="Excluir esta tarefa?"
        message="Se você excluir esta tarefa, ela vai desaparecer para sempre. Tem certeza que deseja continuar?"
        cancel={() => setCurrentTask(0)}
        confirm={handleRemoveTask}
      />
      <Header>
        <Wrapper>
          <h1>Tarefas</h1>
          <p>Aqui você pode ver suas tarefas.</p>
        </Wrapper>
        <Button onClick={() => history.push("/addtask")}>
          <FaPlus />
          <span>Nova tarefa</span>
        </Button>
      </Header>
      <Content>
        <Scroll>
          {tasks.length === 0 ? (
            <Empty>
              <h1>Não há nada por aqui</h1>
              <p>
                Clique no botão que está no canto superior direito para
                adicionar uma nova tarefa!
              </p>
            </Empty>
          ) : (
            <List>{handleRenderTasks()}</List>
          )}
        </Scroll>
      </Content>
    </Container>
  );
}

export default Tasks;
