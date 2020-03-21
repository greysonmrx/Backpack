import styled from "styled-components";
import { lighten, darken } from "polished";
import { Form as UForm } from "@unform/web";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${props => (props.visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999999;
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  padding: 20px 30px;
  border-radius: 8px;
  width: 500px;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0 10px 0;
  text-align: center;

  h3 {
    font-size: 20px;
    margin-bottom: 15px;
    color: #202124;
  }

  p {
    font-size: 16px;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 45px;
  height: 45px;
  background: ${lighten(0.43, "#3333cc")};
  border-radius: 50%;

  svg {
    font-size: 25px;
    color: #3333cc;
  }
`;

export const Exit = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background: none;
  border: none;
  outline: none;

  svg {
    font-size: 20px;
    color: #999999;
  }
`;

export const Button = styled.button`
  background: #3333cc;
  border: none;
  padding: 10px 15px;
  margin: 10px 0;
  border-radius: 5px;
  font-weight: 500;
  color: #ffffff;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => darken(0.1, "#3333cc")};
  }
`;

export const Form = styled(UForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 0 0;
`;
