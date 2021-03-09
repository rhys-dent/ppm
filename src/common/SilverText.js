import styled from "styled-components";

const SilverText = styled.div`
  position: relative;
  font-size: ${(props) => props.theme.main.ourServices.nav.navLink.fontSize};
  .shadow {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    width: 100%;
    text-shadow: 0px 0px 2px black;
  }
  .silver-text {
    display: block;
    position: relative;
    text-align: center;
    z-index: 4;
    width: 100%;
  }
`;

export default function ({ text }) {
  return (
    <SilverText>
      <span className="shadow"> {text}</span>
      <span className="silver-text">{text}</span>
    </SilverText>
  );
}
