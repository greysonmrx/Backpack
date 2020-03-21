import styled, { keyframes } from "styled-components";
import { darken } from "polished";

const show = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 100;
`;

export const ButtonIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: fit-content;
  border: none;
  outline: none;
  background: none;

  svg {
    font-size: 25px;
  }
`;

export const Menu = styled.div`
  position: absolute;
  display: ${props => (props.visible ? "flex" : "none")};
  flex-direction: column;
  width: 200px;
  padding: 5px 0;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  left: ${props => (props.showLeft ? "-200px" : "40px")};
  top: 10px;
  animation: ${show} 0.2s ease;
`;

export const Item = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  background: #ffffff;
  border: none;
  color: #666666;

  span {
    margin-top: 3px;
    margin-left: 10px;
    font-size: 17px;
  }

  svg {
    font-size: 20px;
    margin-left: 8px;
  }

  &:hover {
    background: ${darken(0.1, "#FFFFFF")};
  }
`;
