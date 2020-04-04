import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import {
  Container,
  Modal,
  Top,
  Center,
  Bottom,
  Content,
  Icon,
  Exit,
  Button,
} from "./styles";

function ModalDelete({ title, message, cancel, confirm, visible }) {
  return (
    <Container visible={visible}>
      <Modal>
        <Top>
          <Content>
            <Icon>
              <MdDelete />
            </Icon>
            <h3>{title}</h3>
          </Content>
          <Exit onClick={() => cancel()}>
            <FaTimes />
          </Exit>
        </Top>
        <Center>
          <p>{message}</p>
        </Center>
        <Bottom>
          <Button outline onClick={() => cancel()}>
            Cancelar
          </Button>
          <Button
            onClick={() => {
              confirm();
              cancel();
            }}
          >
            Excluir
          </Button>
        </Bottom>
      </Modal>
    </Container>
  );
}

export default ModalDelete;

ModalDelete.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  cancel: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired,
};
