import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdEventNote, MdCheckCircle, MdBook, MdSettings } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

import {
  Container,
  Header,
  Menu,
  Items,
  Title,
  Item,
  Button,
  Wrapper,
} from "./styles";

import history from "../../services/history";
import Logo from "../../assets/logo-color-extended.png";
import ModalCreateNotebook from "../ModalCreateNotebook";
import { create } from "../../store/modules/notebook/actions";

function Sidebar() {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const notebooks = useSelector((state) => state.notebook.notebooks);

  function handleActiveLink(name, index) {
    return history.location.pathname.split("/")[index] === name;
  }

  return (
    <Container>
      <ModalCreateNotebook
        title="Novo caderno"
        message="Defina o nome do seu novo caderno para criá-lo!"
        cancel={() => setVisible(false)}
        confirm={(data) => dispatch(create({ ...data, notes: [] }))}
        visible={visible}
      />
      <Wrapper>
        <Header>
          <img src={Logo} alt="Backpack" />
        </Header>
        <Menu>
          <Items>
            <Item single={1} active={handleActiveLink("", 1) ? 1 : 0} to="/">
              <MdEventNote size={23} />
              <span>Calendário</span>
            </Item>
            <Item
              single={1}
              active={handleActiveLink("tasks", 1) ? 1 : 0}
              to="/tasks"
            >
              <MdCheckCircle size={23} />
              <span>Tarefas</span>
            </Item>
            <Title>
              <span>Cadernos</span>
              <button onClick={() => setVisible(true)}>
                <FaPlus />
              </button>
            </Title>
            {notebooks.map((notebook) => (
              <Item
                key={notebook.id}
                to={{
                  pathname: `/notebook/${notebook.id}`,
                  state: { notebook },
                }}
                active={handleActiveLink(notebook.id, 2) ? 1 : 0}
              >
                <MdBook size={20} />
                <span>{notebook.name}</span>
              </Item>
            ))}
          </Items>
        </Menu>
        <Button onClick={() => history.push("/settings")}>
          <MdSettings />
          <span>Configurações</span>
        </Button>
        <footer>
          <p>Version 1.0.5</p>
          <p>
            Made with{" "}
            <span role="img" aria-label="Heart">
              ❤️
            </span>{" "}
            by Greyson
          </p>
        </footer>
      </Wrapper>
    </Container>
  );
}

export default Sidebar;
