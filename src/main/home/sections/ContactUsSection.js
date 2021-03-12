import { useContext } from "react";
import styled from "styled-components";
import Context from "../../../Context";
const ContactUsSectionS = styled.section`
  min-height: ${(props) => props.theme.main.height};
`;
const InnerS = styled.div`
  box-sizing: border-box;
  padding: ${(props) => props.theme.main.home.contactUs.padding};
  h1 {
    padding: 1rem;
    font-size: 3rem;
    margin: 1rem;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
export default function () {
  const context = useContext(Context);
  return (
    <ContactUsSectionS>
      <InnerS>
        <h1 className="white-smoke-title">Pricing</h1>
        <div>
          {context.pricingModules.map((module) => (
            <h1 className="frosted-glass">{module.title}</h1>
          ))}
        </div>
      </InnerS>
    </ContactUsSectionS>
  );
}
