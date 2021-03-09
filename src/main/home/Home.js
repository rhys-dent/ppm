import { useContext } from "react";
import styled from "styled-components";
import FixedBackground from "../../common/FixedBackground";
import Context from "../../Context";
import Frame from "./Frame";
const HomeS = styled.article`
  height: inherit;
  min-height: 100%;
  text-align: center;
`;
export default function () {
  const context = useContext(Context);
  return (
    <HomeS>
      {context.homeSections.map((homeSection) => (
        <Frame title={homeSection.title}>
          <FixedBackground url={homeSection.backgroundUrl}>
            <homeSection.Component {...homeSection} />
          </FixedBackground>
        </Frame>
      ))}
    </HomeS>
  );
}
