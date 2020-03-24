import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container, Header, Content, Scroll, Item } from "./styles";
import Switch from "../../components/Switch";
import { set } from "../../store/modules/setting/actions";

function Settings() {
  const { settings } = useSelector(state => state.setting);
  const dispatch = useDispatch();

  function handleToggle(index, value) {
    dispatch(set({ index, value }));
  }

  return (
    <Container>
      <Header>
        <h1>Configurações</h1>
        <p>
          Você pode alterar aqui suas preferências. Elas serão salvas
          automaticamente.
        </p>
      </Header>
      <Content>
        <Scroll>
          <Item>
            <h2>Notificações</h2>
            <div>
              <h3>Ativar notificações na área de trabalho</h3>
              <Switch
                enable={settings[0].value}
                onChange={value => handleToggle(0, value.target.checked)}
              />
            </div>
          </Item>
        </Scroll>
      </Content>
    </Container>
  );
}

export default Settings;
