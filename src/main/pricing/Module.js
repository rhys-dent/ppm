import styled from "styled-components";

const PricingModuleS = styled.section`
  box-sizing: border-box;
  width: 75%;
  padding: 5%;
  margin: 5% auto;
  div {
    padding-top: 1rem;
  }
`;
export default function ({ title, text }) {
  return (
    <PricingModuleS className="frosted-glass">
      <h3>{title}</h3>
      <div>{text}</div>
    </PricingModuleS>
  );
}
