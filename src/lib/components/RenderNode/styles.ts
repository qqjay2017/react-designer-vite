import styled from "styled-components";

export const IndicatorDiv = styled.div`
  height: 30px;
  margin-top: -29px;
  font-size: 12px;
  line-height: 12px;

  svg {
    fill: #fff;
    width: 15px;
    height: 15px;
  }
`;

export const RenderNodeBtn = styled.a`
  border-radius: 2px;
  padding: 6px 8px;
  opacity: 0.9;
  height: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  > div {
    position: relative;
    top: -50%;
    left: -50%;
  }
`;
