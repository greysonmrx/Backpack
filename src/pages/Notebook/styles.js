import styled from "styled-components";
import PerfectScrollBar from "react-perfect-scrollbar";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
`;

export const Content = styled.div`
  background: #fcfcfc;
  height: 100%;
  width: 250px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;

export const Wrapper = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  span {
    color: #999999;
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
`;

export const Notes = styled.div`
  height: calc(100% - 85px);
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 100%;
`;

export const Note = styled.button`
  background: #f9f9f9;
  border: none;
  text-align: left;
  width: 100%;
  padding: 10px 15px;
  border: 1px solid transparent;
  border-bottom-color: #dddddd;

  &:hover {
    border-color: #3333cc;
  }

  h3 {
    font-size: 18.5px;
    margin-bottom: 5px;
    color: #202124;
  }

  time {
    font-size: 13px;
    color: #999999;
  }

  p {
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: #333333;
  }
`;

export const Empty = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  padding: 20px;
  font-size: 17px;
`;
