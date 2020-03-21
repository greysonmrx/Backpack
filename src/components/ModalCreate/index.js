import React, { useRef } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { MdClass } from "react-icons/md";
import * as Yup from "yup";
import crypto from "crypto";
import { promisify } from "util";

import Input from "../Input";
import { Container, Modal, Center, Icon, Exit, Button, Form } from "./styles";

function ModalCreate({ title, message, cancel, confirm, visible }) {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("O nome do caderno é obrigatório")
      });

      await schema.validate(data, {
        abortEarly: false
      });

      formRef.current.setErrors({});

      const randomBytes = await promisify(crypto.randomBytes)(256);

      confirm({ id: randomBytes.toString("hex"), ...data });
      cancel();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return visible ? (
    <Container visible={visible}>
      <Modal>
        <Icon>
          <MdClass />
        </Icon>
        <Center>
          <h3>{title}</h3>
          <p>{message}</p>
        </Center>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Ex.: Cálculo 2" />
          <Button type="submit">Adicionar caderno</Button>
        </Form>
        <Exit onClick={() => cancel()}>
          <FaTimes />
        </Exit>
      </Modal>
    </Container>
  ) : null;
}

export default ModalCreate;

ModalCreate.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  cancel: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired
};
