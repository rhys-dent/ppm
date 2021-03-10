import { useContext } from "react";
import styled from "styled-components";
import Context from "../../../Context";

const OurServiceSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: ${(props) => props.theme.main.home.ourServices.padding};
  div {
    box-sizing: border-box;
    padding: ${(props) => props.theme.main.home.ourServices.service.padding};
    margin: 0 auto;
  }
`;
const InnerS = styled.span`
  display: block;
  box-shadow: 0 0 4px black;
  h3 {
    padding: 0.25rem;
  }
`;
export default function () {
  const context = useContext(Context);
  return (
    <OurServiceSection>
      {context.services.map((service) => (
        <div>
          <InnerS className="frosted-glass">
            <img src={service.icon} width="100%" />
            <h3>{service.title}</h3>
          </InnerS>
        </div>
      ))}
    </OurServiceSection>
  );
}
