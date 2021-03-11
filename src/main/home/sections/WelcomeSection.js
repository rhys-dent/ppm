import styled from "styled-components";

const WelcomeSectionS = styled.section`
  --main-height: ${(props) => props.theme.main.height};
  box-sizing: border-box;
  height: var(--main-height);
  width: 100%;
  padding-top: 5%;
  img {
    display: block;
    max-height: 90%;
    max-width: 90%;
    margin: 0 auto;
  }
`;

export default function () {
  return (
    <WelcomeSectionS>
      <img
        src="icons/prometheus-logo-title.png"
        className="frosted-glass-black box-whitesmoke-shadow-outline"
      />
    </WelcomeSectionS>
  );
}
