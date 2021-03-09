import styled from "styled-components";

const FAQS = styled.section`
  margin: 5%;
  padding: 5%;
`;
const QuestionS = styled.div`
  font-weight: bold;
`;
const AnswerS = styled.div``;

export default function ({ q, a }) {
  return (
    <FAQS className="frosted-glass">
      <QuestionS>{q}</QuestionS>
      <AnswerS>{a}</AnswerS>
    </FAQS>
  );
}
