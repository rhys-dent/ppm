import styled from "styled-components";
const FrameS = styled.section`
  position: relative;
  min-height: inherit;
`;
const TitleS = styled.h2`
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
`;
export default function ({ children, title }) {
  return <FrameS>{children} </FrameS>;
}
