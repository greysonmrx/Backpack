import React, { useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { MdSave } from "react-icons/md";
import * as Yup from "yup";

import { Container, Header, Wrapper, Button, Form } from "./styles";
import Input from "../../components/Input";
import history from "../../services/history";
import SubmitButton from "../../components/Button";

function AddTask() {
  const formRef = useRef(null);
  const [disable, setDisable] = useState(true);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().required("O título é obrigatório")
      });

      await schema.validate(data, {
        abortEarly: false
      });

      formRef.current.setErrors({});
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

  function handleDisableButton() {
    const { value: title } = formRef.current.getFieldRef("title");

    setDisable(!title);
  }

  return (
    <Container>
      <Header>
        <Wrapper>
          <h1>Nova tarefa</h1>
          <p>Defina a tarefa e salve.</p>
        </Wrapper>
        <Button onClick={() => history.push("/tasks")}>
          <FaTimes />
        </Button>
      </Header>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Input
          name="title"
          title="Tarefa"
          type="text"
          onChange={handleDisableButton}
        />
        <SubmitButton type="submit" isDisabled={disable}>
          <>
            <MdSave />
            <span>Adicionar tarefa</span>
          </>
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default AddTask;
