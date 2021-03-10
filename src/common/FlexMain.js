import styled from "styled-components";
import GoldText from "./GoldTitle";

const CommonMainS = styled.article`
  min-height: ${(props) => props.theme.main.height};
  width: 100%;
  h1 {
    box-sizing: border-box;
    padding: 2rem;
    font-size: 2rem;
    font-weight: normal;
    text-align: center;
  }
`;

const FlexItems = styled.section`
  display: flex;
  flex-direction: ${(props) =>
    props.theme.main.safetyAndSecurity.flexDirection};
  justify-content: space-evenly;
`;

export default function ({ title, items, Comp }) {
  return (
    <CommonMainS>
      <h1>
        <GoldText>{title}</GoldText>
      </h1>
      <FlexItems>
        {items.map((item) => (
          <Comp {...item} />
        ))}
      </FlexItems>
    </CommonMainS>
  );
}
