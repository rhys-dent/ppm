import { useContext } from "react";
import styled from "styled-components";
import GoldTitle from "../../common/GoldTitle";
import Context from "../../Context";
import FAQ from "./FAQ";

const FAQsS = styled.article`
  min-height: ${(props) => props.theme.main.height};
  width: 100%;
  display: ${(props) => props.theme.main.faqs.display};
  grid-template-columns: 1fr 1fr;

  h1 {
    box-sizing: border-box;
    margin: 1rem;
    font-weight: normal;
  }
`;

export default function () {
  const context = useContext(Context);
  return (
    <FAQsS>
      <h1>
        <GoldTitle>Frequently Asked Question</GoldTitle>
      </h1>
      {context.faqs.map((faq) => (
        <FAQ {...faq} />
      ))}
    </FAQsS>
  );
}
