import { useContext } from "react";
import styled from "styled-components";
import Context from "../../Context";
import SecuritySystem from "./SecuritySystem";
import FlexMain from "../../common/FlexMain";

const SafetyAndSecurityS = styled.article`
  min-height: ${(props) => props.theme.main.height};
  width: 100%;
  h1 {
    box-sizing: border-box;
  }
`;
export default function () {
  const context = useContext(Context);
  return (
    <SafetyAndSecurityS>
      <FlexMain
        title="Safety and Security"
        items={context.safetyAndSecurity}
        Comp={SecuritySystem}
      />
    </SafetyAndSecurityS>
  );
}
