import styled from "styled-components";
import { parseToRgb } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 250px;
  height: 150px;
  padding: 15px;
  border-radius: 8px;
  border-left: 8px solid ${(props) => props.color};
  background: ${(props) => {
    const { red, green, blue } = parseToRgb(props.color);

    return `rgba(${red}, ${green}, ${blue}, 0.1)`;
  }};
  margin-bottom: 20px;
  color: #202124;

  time {
    color: #666666;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    width: 75%;
    font-size: 18.5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
