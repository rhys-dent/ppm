import styled from "styled-components";

const PricingModuleS = styled.section`
  box-sizing: border-box;
  width: 30%;
  padding: 1rem;
  h3 {
    padding-bottom: 1rem;
  }
  div {
    box-sizing: border-box;
    font-size: 1rem;
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
