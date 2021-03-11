import styled from "styled-components";

const FAQS = styled.section`
  position: relative;
  padding: 5%;
  height: 200px;
  transition: height 0.25s ease-in-out;
  :hover {
    .on-hover {
      padding-top: 0.5rem;
      height: 70%;
    }
    .q-on-hover {
      padding: 0.25rem;
    }
  }
`;
const QuestionS = styled.div`
  padding: 1rem;
  font-weight: bold;
  transition: padding 0.25s ease-in-out;
`;
const AnswerS = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 0;
  overflow-y: hidden;
  color: whitesmoke;
  transition: height 0.25s ease-in-out, padding 0.25s ease-in-out;
  padding: ${(props) => props.theme.main.faqs.faq.padding};
`;

export default function ({ q, a }) {
  return (
    <FAQS>
      <QuestionS className="q-on-hover frosted-glass">{q}</QuestionS>
      <AnswerS className="on-hover frosted-glass-black">{a}</AnswerS>
    </FAQS>
  );
}
