import { useContext } from "react";
import styled from "styled-components";
import Context from "../../../Context";
import FixedBackground from "../../../common/FixedBackground";

const SafetyAndSecuritySection = styled.section`
  box-sizing: border-box;
  min-height: ${(props) => props.theme.main.height};
  padding: 2rem;
  display: flex;
  flex-direction: ${(props) =>
    props.theme.main.home.safetyAndSecurity.flexDirection};
  justify-content: space-evenly;
  align-items: center;
  h1 {
    font-size: 2rem;
    padding: 1rem;
    text-shadow: 1px 1px 2px black;
  }
`;

export default function ({ backgroundUrl }) {
  const context = useContext(Context);
  return (
    <FixedBackground url={backgroundUrl}>
      <SafetyAndSecuritySection>
        {context.safetyAndSecurity.map((securitySystem) => (
          <h1 className="frosted-glass">{securitySystem.title}</h1>
        ))}
      </SafetyAndSecuritySection>
    </FixedBackground>
  );
}
