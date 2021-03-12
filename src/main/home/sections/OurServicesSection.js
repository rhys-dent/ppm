import { useContext } from "react";
import styled from "styled-components";
import Context from "../../../Context";

const OurServiceSection = styled.section`
  box-sizing: border-box;
  height: ${(props) => props.theme.main.height};
  display: grid;
  grid-template-columns: ${(props) =>
    props.theme.main.home.ourServices.gridTemplateColumns};
  padding: ${(props) => props.theme.main.home.ourServices.padding};
`;
const ServiceS = styled.span`
  display: block;
  box-shadow: 0 0 4px black;
  height: 100%;
  h3 {
    padding: 0.25rem;
    font-size: 0.75rem;
  }
`;
export default function () {
  const context = useContext(Context);
  return (
    <OurServiceSection>
      {context.services.map((service) => (
        <div>
          <ServiceS className="frosted-glass">
            <img src={service.icon} width="25%" />
            <h3>{service.title}</h3>
          </ServiceS>
        </div>
      ))}
    </OurServiceSection>
  );
}
