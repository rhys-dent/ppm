import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import Context from "../../Context";
const FrameS = styled.section`
  position: relative;
  height: ${(props) => props.theme.main.height};
  margin-bottom: 100px;
  .guest-reviews {
    height: 100px;
    position: relative;
    z-index: 10;
    box-shadow: 0 0 16px black;
  }
`;
const ChildrenS = styled.section`
  position: absolute;
  height: inherit;
  width: 100%;
  min-height: inherit;
`;
const Corners = styled.div`
  position: relative;
  height: inherit;
  div {
    transition: height 0s linear, width 0s linear;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const TL = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 5%;
  width: 25px;
  clip-path: polygon(0% 0%, 0% 100%, 100% 0%);
`;
const TR = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 25px;
  width: 25px;
  clip-path: polygon(100% 0%, 100% 100%, 0% 0%);
`;
const BL = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 25px;
  width: 25px;
  clip-path: polygon(0% 100%, 0% 0%, 100% 100%);
`;
const BR = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 25px;
  width: 25px;
  clip-path: polygon(100% 100%, 0% 100%, 100% 0%);
`;
export default function ({ children, title, scroll = 0 }) {
  const context = useContext(Context);
  const frame = useRef();
  const corners = useRef();
  const height = context.px.main.height;
  useEffect(() => {
    var top = Math.abs(
      Math.round(
        ((frame.current.offsetTop - context.px.header.height - scroll) * 100) /
          height
      )
    );
    console.log(top);
    top = top < 100 ? (top > 5 ? top : 5) : 100;
    Object.values(corners.current.children).forEach((corner) => {
      corner.style.height = top + "%";
      corner.style.width = top + "%";
    });
  });
  return (
    <FrameS ref={frame}>
      <ChildrenS>{children}</ChildrenS>
      <Corners ref={corners}>
        <TL className="" />
        <TR className="" />
        <BL className="" />
        <BR className="" />
      </Corners>
      <h1 class="frosted-glass guest-reviews">Guest Review</h1>
    </FrameS>
  );
}
