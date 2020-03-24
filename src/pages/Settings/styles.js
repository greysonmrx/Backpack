import styled from "styled-components";
import PerfectSrollBar from "react-perfect-scrollbar";

export const Container = styled.div`
  width: calc(100% - 280px);
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 160px);
`;

export const Scroll = styled(PerfectSrollBar)`
  max-height: 100%;
  padding: 0 50px;
`;

export const Item = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  div {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-weight: 400;
    }
  }
`;
