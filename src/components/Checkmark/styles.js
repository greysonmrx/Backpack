import styled from "styled-components";

export const Container = styled.div`
  input {
    display: none;

    &:checked + span {
      width: 2em;
      height: 2em;
      background: #3333cc;
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
    display: inline-block;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.1);
    background: white;
    vertical-align: middle;
    margin-right: 10px;
    width: 2em;
    height: 2em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border 0.3s ease;

    &:hover {
      border: 2px solid rgba(0, 0, 0, 0.2);
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
