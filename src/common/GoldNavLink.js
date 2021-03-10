import styled from "styled-components";
const GoldTextS = styled.div`
  display: inline-block;
  position: relative;
  :hover {
    .on-hover {
      height: 100%;
      width: 100%;
    }
  }
`;
const margin = "2px";
const TextS = styled.div`
  margin: ${margin};
  position: relative;
  z-index: 5;
  background-image: url("backgrounds/gold-gradient-text.png");
  background-clip: text;
  background-size: 100% 100%;
  background-position: center;
  color: transparent;
  padding: calc(${margin} * 2);
`;
const BlackBackS = styled.div`
  margin: ${margin};
  position: absolute;
  top: 0;
  background-color: black;
  text-shadow: 0 0 8px gold;

  box-shadow: 0 0 1px black;
  padding: calc(${margin} * 2);
`;
const OutLineTL = styled.div`
  position: absolute;
  height: 0%;
  width: 0%;
  background-image: url("backgrounds/gold-gradient-text.png");
  background-size: 100% 100%;
  box-shadow: 0 0 1px gold;
  transition: height 0.5s ease-in-out, width 0.5s ease-in-out;
`;
const OutLineBR = styled.div`
  position: absolute;
  height: 0%;
  width: 0%;
  bottom: 0;
  right: 0;
  background-image: url("backgrounds/gold-gradient-text.png");
  background-size: 100% 100%;
  box-shadow: 0 0 1px gold;
  transition: height 0.5s ease-in-out, width 0.5s ease-in-out;
`;
export default function ({ children }) {
  return (
    <GoldTextS>
      <OutLineTL className="on-hover" />
      <OutLineBR className="on-hover" />
      <BlackBackS>{children}</BlackBackS>
      <TextS>{children}</TextS>
    </GoldTextS>
  );
}
