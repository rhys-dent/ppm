import styled from "styled-components";
import EmailForm from "../../contact-us/EmailForm";

const ContactUsSectionS = styled.section`
  min-height: ${(props) => props.theme.main.height};
`;
const InnerS = styled.div`
  box-sizing: border-box;
  padding: 10% 25%;
  h1 {
    padding: 1rem;
    font-size: 3rem;
  }
`;
export default function () {
  return (
    <ContactUsSectionS>
      <InnerS>
        <h1 className="white-smoke-title">Contact Us</h1>
        <EmailForm />
      </InnerS>
    </ContactUsSectionS>
  );
}
