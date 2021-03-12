import { useContext } from "react";
import styled from "styled-components";
import Context from "../../Context";
import Module from "./Module";
import FlexMain from "../../common/FlexMain";

const PricingS = styled.article``;
export default function () {
  const context = useContext(Context);

  return (
    <PricingS>
      <FlexMain title="Pricing" items={context.pricingModules} Comp={Module} />
    </PricingS>
  );
}
