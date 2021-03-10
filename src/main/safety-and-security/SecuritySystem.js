import styled from "styled-components";

const SecuritySystemS = styled.section`
  box-sizing: border-box;
  width: ${(props) => props.theme.main.safetyAndSecurity.securitySystem.width};
  padding: ${(props) =>
    props.theme.main.safetyAndSecurity.securitySystem.margin};
`;
const InnerS = styled.div`
  box-sizing: border-box;
  min-height: 50%;
  padding: 5%;
  div {
    padding-top: 1rem;
  }
`;
export default function ({ title, text }) {
  return (
    <SecuritySystemS>
      <InnerS className="frosted-glass">
        <h3>{title}</h3>
        <div>{text}</div>
      </InnerS>
    </SecuritySystemS>
  );
}
