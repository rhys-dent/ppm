import styled from "styled-components";
const FrameS = styled.section`
  position: relative;
  min-height: inherit;
  .guest-reviews {
    background-color: darkgray;
    height: 3rem;
  }
`;
const TitleS = styled.h2`
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
`;
export default function ({ children, title }) {
  return (
    <FrameS>
      {children}
      <h1 className="guest-reviews">Guest Reviews</h1>
    </FrameS>
  );
}
