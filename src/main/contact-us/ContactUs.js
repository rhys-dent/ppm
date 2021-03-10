import styled from "styled-components";
import { useContext } from "react";
import Context from "../../Context";
import EmailForm from "./EmailForm";

const ContactUsSectionS = styled.section`
  box-sizing: border-box;
  min-height: ${(props) => props.theme.main.height};
  padding: ${(props) => props.theme.main.contactUs.padding};
  h1 {
    font-size: 3rem;
    text-align: center;
    margin: 0 auto;
    padding: 2rem;
  }
`;

export default function () {
  return (
    <ContactUsSectionS>
      <h1 className="white-smoke-title">Get in touch</h1>
      <EmailForm />
    </ContactUsSectionS>
  );
}
