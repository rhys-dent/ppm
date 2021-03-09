import styled from "styled-components";

const SecuritySystemS = styled.section`
  box-sizing: border-box;
  width: 75%;
  padding-top: 10%;
  margin: 0 auto;
`;
const InnerS = styled.div`
  height: 50%;
  padding: 5%;
  div {
    padding-top: 1rem;
  }
`;

export default function ({ title, text }) {
  return (
    <SecuritySystemS>
      <InnerS className="frosted-glass">
        <h3>{title}</h3>
        <div>{text}</div>
      </InnerS>
    </SecuritySystemS>
  );
}
