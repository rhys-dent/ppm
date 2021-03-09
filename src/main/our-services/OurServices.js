import { useContext } from "react";
import styled from "styled-components";
import Context from "../../Context";
import Nav from "./Nav";
import Service from "./Service";

const OurServicesS = styled.article`
  position: relative;
`;
const ServicesS = styled.section`
  --width: ${(props) => props.theme.main.ourServices.nav.width};
  width: calc(100%- var(--width));
  margin-left: var(--width);
`;

export default function () {
  const context = useContext(Context);
  return (
    <OurServicesS>
      <Nav />
      <ServicesS>
        {context.services.map((service) => (
          <Service {...service} />
        ))}
      </ServicesS>
    </OurServicesS>
  );
}
