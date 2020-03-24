import styled from "styled-components";

export const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 25px;

  > input {
    display: none;
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #999;
  transition: all 0.4s;
  border-radius: 15px;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    top: 3px;
    left: 4px;
    background: #fff;
    transition: 0.2s;
    border-radius: 50%;
  }
`;

export const SliderInput = styled.input`
  &:checked + ${Slider} {
    background: #3333cc;

    &:before {
      transform: translateX(19px);
      background: #ffffff;
    }
  }
`;
