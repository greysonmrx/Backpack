import React from "react";

import { Container, Header, Content, Item } from "./styles";
function Settings() {
  return (
    <Container>
      <Header>
        <h1>Configurações</h1>
        <p>
          Você pode alterar aqui suas preferências. Elas serão salvas
          automaticamente.
        </p>
      </Header>
      <Content></Content>
    </Container>
  );
}

export default Settings;
