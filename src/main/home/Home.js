import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import FixedBackground from "../../common/FixedBackground";
import Context from "../../Context";
import Frame from "./Frame";
const HomeS = styled.article`
  height: inherit;
  min-height: 100%;
  text-align: center;
`;
export default function ({ scroll }) {
  const context = useContext(Context);
  const home = useRef();
  useEffect(() => {});
  return (
    <HomeS ref={home}>
      {context.homeSections.map((homeSection) => (
        <Frame scroll={scroll} title={homeSection.title}>
          <FixedBackground url={homeSection.backgroundUrl}>
            <homeSection.Component {...homeSection} />
          </FixedBackground>
        </Frame>
      ))}
    </HomeS>
  );
}
