import styled, { css } from "styled-components";
import { parseToRgb } from "polished";

export const Container = styled.div`
  display: flex;
  width: 250px;
  height: 150px;
  box-shadow: 0 0 3px rgba(51, 51, 51, 0.1);
  margin-bottom: 20px;
  flex-direction: column;
  color: #202124;

  ${(props) =>
    props.color
      ? css`
          justify-content: space-between;
          padding: 15px;
          border-radius: 8px;
          border-left: 8px solid ${(props) => props.color};
          background: ${(props) => {
            const { red, green, blue } = parseToRgb(props.color);

            return `rgba(${red}, ${green}, ${blue}, 0.1)`;
          }};

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
        `
      : css`
          align-items: center;
          justify-content: space-between;
          padding: 30px;
          border-radius: 8px;
          background: rgba(51, 51, 51, 0.1);

          h3 {
            font-size: 20px;
          }
        `}
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

export const Button = styled.button`
  padding: 7px 25px;
  border: none;
  background: rgba(51, 51, 51, 0.15);
  border-radius: 5px;
`;
