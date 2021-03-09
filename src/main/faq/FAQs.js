import { useContext } from "react";
import styled from "styled-components";
import Context from "../../Context";
import FAQ from "./FAQ";

const FAQsS = styled.article`
  min-height: ${(props) => props.theme.main.height};
  width: 100%;
  display: ${(props) => props.theme.main.faq.display};
  grid-template-columns: 1fr 1fr;

  h1 {
    box-sizing: border-box;
    margin: 1rem;
    padding: 8rem;
  }
`;

export default function () {
  const context = useContext(Context);
  return (
    <FAQsS>
      <h1 className="main-title ">Frequently Asked Question</h1>
      {context.faqs.map((faq) => (
        <FAQ {...faq} />
      ))}
    </FAQsS>
  );
}
