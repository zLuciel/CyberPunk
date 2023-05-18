import styled from "styled-components";

export const ContainerCol2 = styled.div`
  overflow: hidden;
  position: relative;
  background: rgba(3, 3, 3, 0.3);
`;

export const TitleAbs = styled.h1`
  position: absolute;
  font-family: "Bruno Ace SC";
  font-style: normal;
  font-weight: 400;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 8rem;
  -webkit-text-stroke: 0.5px #ffe300;
  color: transparent;
  z-index: 1;
  white-space: nowrap;
`;
