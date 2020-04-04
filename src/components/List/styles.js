import styled from "styled-components";

export const Container = styled.div`
  margin-left: 20px;
  display: ${(props) => !props.hasLessons && "none"};

  h2 {
    color: ${(props) => (props.isToday ? "#3333cc" : "#666666")};
    text-transform: uppercase;
    font-size: 16px;
    margin-bottom: 10px;
  }
`;
