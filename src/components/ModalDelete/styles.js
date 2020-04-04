import styled from "styled-components";
import { lighten, darken } from "polished";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999999;
`;

export const Modal = styled.div`
  background: #ffffff;
  padding: 20px 30px;
  border-radius: 8px;
  width: 500px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 18.5px;
    margin-top: 5px;
    margin-left: 15px;
    color: #202124;
  }
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0;

  p {
    font-size: 16px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${lighten(0.5, "#d50000")};
  border-radius: 50%;

  svg {
    font-size: 25px;
    color: #d50000;
  }
`;

export const Exit = styled.button`
  background: none;
  border: none;
  outline: none;

  svg {
    font-size: 20px;
    color: #999999;
  }
`;

export const Button = styled.button`
  background: ${(props) => (props.outline ? "#ffffff" : "#d50000")};
  border: ${(props) => (props.outline ? "1px solid #bbbbbb" : "none")};
  padding: 10px 0;
  width: 90px;
  margin: 0 5px;
  border-radius: 5px;
  font-weight: 500;
  color: ${(props) => (props.outline ? "#666666" : "#ffffff")};
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) =>
      darken(0.1, props.outline ? "#ffffff" : "#d50000")};
  }
`;
