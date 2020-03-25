import styled from "styled-components";
import { Form as UForm } from "@unform/web";
import PerfectScrollBar from "react-perfect-scrollbar";

export const Container = styled.div`
  width: calc(100% - 280px);
  height: 100%;
`;

export const Header = styled.div`
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

export const Wrapper = styled.div``;

export const Scroll = styled(PerfectScrollBar)`
  max-height: calc(100% - 160px);
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  background: rgba(51, 51, 204, 0.2);
  display: flex;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 50%;
  transition: all 0.3s;
  color: #3333cc;
  margin-left: 50px;
  padding: 0 10px;

  svg {
    font-size: 20px;
  }

  :hover {
    background: rgba(51, 51, 204, 0.4);
  }
`;

export const Form = styled(UForm)`
  padding: 30px 50px;

  div {
    display: flex;
    margin-bottom: 20px;
  }
`;

export const Colors = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    margin-top: 10px;
  }

  p {
    font-size: 17px;
  }
`;
