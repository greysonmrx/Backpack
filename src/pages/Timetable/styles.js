import styled from "styled-components";
import { darken, parseToRgb } from "polished";
import PerfectScrollBar from "react-perfect-scrollbar";

export const Container = styled.div`
  width: calc(100% - 280px);
  height: 100%;
`;

export const Wrapper = styled.div``;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 50px;

  h1 {
    color: #202124;
    font-size: 40px;
  }

  p {
    color: #666666;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  min-width: 150px;
  height: 50px;
  background: #3333cc;
  display: flex;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: all 0.3s;
  color: #ffffff;
  margin-left: 50px;
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
    background: ${darken(0.1, "#3333cc")};
  }
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 160px);
`;

export const Scroll = styled(PerfectScrollBar)`
  max-width: 100%;
`;

export const Grid = styled.div`
  display: inline-flex;
  padding: 20px 30px 0 30px;
`;

export const Cards = styled.div`
  margin-left: 20px;

  h2 {
    color: ${props => (props.isToday ? "#3333cc" : "#666666")};
    text-transform: uppercase;
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 250px;
  height: 150px;
  padding: 15px;
  border-radius: 8px;
  border-left: 8px solid ${props => props.color};
  background: ${props => {
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

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;

  h1 {
    color: #202124;
    font-size: 40px;
  }

  p {
    color: #666666;
    font-size: 16px;
  }
`;
