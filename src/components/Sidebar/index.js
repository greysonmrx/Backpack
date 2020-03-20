import React, { useState } from "react";
import { MdEventNote, MdCheckCircle, MdBook, MdSettings } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

import { Container, Header, Menu, Items, Title, Item, Button } from "./styles";

import history from "../../services/history";
import Logo from "../../assets/logo-color-extended.png";

function Sidebar() {
  const [notebooks] = useState([]);

  function handleActiveLink(name) {
    return history.location.pathname.split("/")[1] === name;
  }

  return (
    <Container>
      <Header>
        <img src={Logo} alt="Backpack" />
      </Header>
      <Menu>
        <Items>
          <Item single={1} active={handleActiveLink("") ? 1 : 0} to="/">
            <MdEventNote size={23} />
            <span>Calendário</span>
          </Item>
          <Item
            single={1}
            active={handleActiveLink("tasks") ? 1 : 0}
            to="/tasks"
          >
            <MdCheckCircle size={23} />
            <span>Tarefas</span>
          </Item>
          <Title>
            <span>Cadernos</span>
            <button>
              <FaPlus />
            </button>
          </Title>
          {notebooks.map(notebook => (
            <Item key={notebook.id}>
              <MdBook size={20} />
              <span>{notebook.name}</span>
            </Item>
          ))}
        </Items>
      </Menu>
      <Button>
        <MdSettings />
        <span>Configurações</span>
      </Button>
      <footer>
        <p>Version 1.0.0</p>
        <p>
          Made by Greyson with{" "}
          <span role="img" aria-label="Heart">
            ❤️
          </span>
        </p>
      </footer>
    </Container>
  );
}

export default Sidebar;
