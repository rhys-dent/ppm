import { useContext } from "react";
import styled from "styled-components";
import Context from "../../Context";
import SecuritySystem from "./SecuritySystem";

const SafetyAndSecurityS = styled.article`
  min-height: ${(props) => props.theme.main.height};
  width: 100%;
  display: ${(props) => props.theme.main.faq.display};
  grid-template-columns: 1fr 1fr;
  h1 {
    box-sizing: border-box;
    margin: 1rem;
    padding: 8rem;
  }
`;

export default function () {
  const context = useContext(Context);
  return (
    <SafetyAndSecurityS>
      <h1 className="main-title">Pricing</h1>
      {context.safetyAndSecurity.map((securitySystem) => (
        <SecuritySystem {...securitySystem} />
      ))}
    </SafetyAndSecurityS>
  );
}
