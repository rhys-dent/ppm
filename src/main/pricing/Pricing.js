import { useContext } from "react";
import styled from "styled-components";
import Context from "../../Context";
import Module from "./Module";
import SilverText from "../../common/SilverText";

const PricingS = styled.article`
  min-height: ${(props) => props.theme.main.height};
  width: 100%;
`;
const ModulesS = styled.section`
  display: ${(props) => props.theme.main.faq.display};
  grid-template-columns: 1fr 1fr;
`;
export default function () {
  const context = useContext(Context);

  return (
    <PricingS>
      <h1 className="main-title">Pricing</h1>
      <ModulesS>
        {context.pricingModules.map((pricingModule) => (
          <Module {...pricingModule} />
        ))}
      </ModulesS>
    </PricingS>
  );
}
