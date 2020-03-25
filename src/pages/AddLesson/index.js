import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { MdSave } from "react-icons/md";
import * as Yup from "yup";
import crypto from "crypto";
import { promisify } from "util";

import {
  Container,
  Header,
  Wrapper,
  Button,
  Scroll,
  Form,
  Colors
} from "./styles";
import Input from "../../components/Input";
import history from "../../services/history";
import SubmitButton from "../../components/Button";
import SelectInput from "../../components/SelectInput";
import SelectColor from "../../components/SelectColor";

import { create } from "../../store/modules/timetable/actions";
import { createNotification } from "../../services/notification";

function AddLesson() {
  const formRef = useRef(null);
  const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        initialTime: Yup.string().required(
          "A hora inicial da aula é obrigatória"
        ),
        finalTime: Yup.string().required("A hora final da aula é obrigatória"),
        name: Yup.string().required("O nome da aula é obrigatório")
      });

      await schema.validate(data, {
        abortEarly: false
      });

      formRef.current.setErrors({});

      const randomBytes = await promisify(crypto.randomBytes)(256);

      const formatedData = {
        id: randomBytes.toString("hex"),
        name: data.name,
        color: data.color,
        day: data.day,
        time: `${data.initialTime} - ${data.finalTime}`,
        classroom: data.classroom,
        teacher: data.teacher
      };

      const message = {
        title: "Uma nova aula foi criada!",
        body: `A aula ${data.name} foi criada`
      };

      createNotification(message);

      dispatch(create(formatedData));
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
    const { value: initialTime } = formRef.current.getFieldRef("initialTime");
    const { value: finalTime } = formRef.current.getFieldRef("finalTime");
    const { value: name } = formRef.current.getFieldRef("name");

    setDisable(!initialTime || !finalTime || !name);
  }

  return (
    <Container>
      <Header>
        <Wrapper>
          <h1>Nova aula</h1>
          <p>Defina os detalhes da aula e salve.</p>
        </Wrapper>
        <Button onClick={() => history.push("/")}>
          <FaTimes />
        </Button>
      </Header>
      <Scroll>
        <Form
          onSubmit={handleSubmit}
          ref={formRef}
          initialData={{ color: "#d50000" }}
        >
          <div>
            <Input
              name="initialTime"
              title="Hora de início da aula"
              type="time"
              style={{ marginRight: 20 }}
              onChange={handleDisableButton}
            />
            <Input
              name="finalTime"
              title="Hora de conclusão da aula"
              type="time"
              onChange={handleDisableButton}
            />
          </div>
          <div>
            <Input
              name="name"
              title="Nome da aula"
              type="text"
              style={{ marginRight: 20 }}
              onChange={handleDisableButton}
            />
            <Input
              name="classroom"
              title="Nome da sala de aula (opcional)"
              type="text"
              onChange={handleDisableButton}
            />
          </div>
          <div>
            <SelectInput
              name="day"
              title="Dia da semana"
              style={{ marginRight: 20 }}
              options={[
                { id: 1, value: "Segunda" },
                { id: 2, value: "Terça" },
                { id: 3, value: "Quarta" },
                { id: 4, value: "Quinta" },
                { id: 5, value: "Sexta" },
                { id: 6, value: "Sábado" },
                { id: 7, value: "Domingo" }
              ]}
            />
            <Input
              name="teacher"
              title="Nome do(a) professor(a) (opcional)"
              type="text"
              onChange={handleDisableButton}
            />
          </div>
          <Colors>
            <p>Escolha uma cor: </p>
            <SelectColor
              name="color"
              options={[
                { color: "#d50000" },
                { color: "#C51162" },
                { color: "#AA00FF" },
                { color: "#6200EA" },
                { color: "#304FFE" },
                { color: "#2962FF" },
                { color: "#0091EA" },
                { color: "#00B8D4" },
                { color: "#00BFA5" },
                { color: "#00C853" },
                { color: "#64DD17" },
                { color: "#AEEA00" },
                { color: "#FFD600" },
                { color: "#FFAB00" },
                { color: "#FF6D00" },
                { color: "#DD2C00" }
              ]}
            />
          </Colors>
          <SubmitButton type="submit" isDisabled={disable}>
            <>
              <MdSave />
              <span>Adicionar aula</span>
            </>
          </SubmitButton>
        </Form>
      </Scroll>
    </Container>
  );
}

export default AddLesson;
