import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 20px;

  span {
    order: -1;
    color: ${(props) => (props.error ? "#e53935" : "#202124")};
    font-size: 17px;
    margin-bottom: 5px;
  }

  input {
    border-radius: 3px;
    border: 1px solid ${(props) => (props.error ? "#e53935" : "#bbbbbb")};
    padding: 8px 16px;
    font-size: 17px;

    &:focus {
      border-color: #3333cc;
      transition: 0.5s ease-out;
    }

    &:focus + span {
      color: #3333cc;
    }
  }
`;
