import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.button`
  width: 300px;
  height: 50px;
  background: #3333cc;
  opacity: ${(props) => (props.disabled ? ".35" : "1")};
  display: flex;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: all 0.3s;
  color: #ffffff;
  padding: 0 10px;

  svg {
    font-size: 20px;
    margin-right: 13px;
    margin-top: 1px;
  }

  span {
    font-size: 16px;
    font-weight: 400;
    margin-top: 3px;
  }

  :hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    background: ${(props) => (!props.disabled ? darken(0.1, "#3333cc") : null)};
  }
`;
