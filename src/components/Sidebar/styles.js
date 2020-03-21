import styled from "styled-components";
import { darken } from "polished";
import { Link } from "react-router-dom";
import PerfectScrollBar from "react-perfect-scrollbar";

export const Container = styled.div`
  user-select: none;
  height: 100%;
  background: #f9f9f9;
  width: 280px;
  min-width: 280px;
  padding: 25px;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  footer {
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 0;
    text-align: center;
    font-weight: 400;
    color: #666666;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  background: #3333cc;
  display: flex;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: all 0.3s;
  color: #ffffff;

  svg {
    font-size: 20px;
    margin-right: 10px;
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

export const Header = styled.div`
  width: 100%;
  margin-bottom: 25px;

  img {
    height: 40px;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 25px;
  max-height: calc(100% - 200px);
`;

export const Items = styled(PerfectScrollBar)`
  padding: 20px 0;
  max-height: 100%;
`;

export const Title = styled.h1`
  color: #999999;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    padding: 4px;
    background: #3333cc;
    border-radius: 5px;
  }

  svg {
    color: #fff;
    font-size: 10px;
  }
`;

export const Item = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;

  &&:hover span,
  &&:hover svg {
    color: #3333cc;
  }

  svg {
    color: ${props => (props.active ? "#3333cc" : "#444444")};
    margin-right: 10px;
  }

  span {
    color: ${props => (props.active ? "#3333cc" : "#202124")};
    font-weight: 400;
    font-size: 16px;
    margin-top: 3px;
  }
`;
