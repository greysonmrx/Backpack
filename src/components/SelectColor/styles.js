import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.label`
  input {
    display: none;

    &:checked + span {
      width: 2em;
      height: 2em;
      border: 0;
      opacity: 1;

      svg {
        opacity: 1;
        transform: scale(0);
        color: white;
        -webkit-text-stroke: 0;
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  span {
    border-radius: 50%;
    background: ${(props) => props.color};
    vertical-align: middle;
    margin-right: 10px;
    width: 2em;
    height: 2em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
      background: ${(props) => darken(0.15, props.color)};
    }

    svg {
      opacity: 0.2;
      font-size: 16px;
      color: transparent;
      transition: opacity 0.3s 0.1s ease;
      -webkit-text-stroke: 3px rgba(0, 0, 0, 0.5);
    }
  }
`;
