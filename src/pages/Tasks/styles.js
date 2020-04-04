import styled from "styled-components";
import { darken } from "polished";
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
  max-height: 100%;
`;

export const List = styled.ul`
  padding: 30px 50px;
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

export const Task = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;

  &:first-child {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const Left = styled.div`
  display: flex;

  label {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      text-decoration: ${(props) => (props.checked ? "line-through" : null)};
      font-size: 15px;
      margin-top: 3px;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Action = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background: ${(props) => props.color};
  outline: none;
  margin-left: 10px;
  padding: 10px;
  border-radius: 50%;
  transition: all 0.3s;

  :hover {
    background: ${(props) => darken(0.1, props.color)};
  }

  svg {
    font-size: 20px;
    color: #ffffff;
  }
`;
