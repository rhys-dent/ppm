import styled from "styled-components";
const GoldTextS = styled.div`
  display: inline-block;
  position: relative;

  :hover {
    .on-hover {
      height: 100%;
      width: 100%;
    }
    .black-back-on-hover {
      box-shadow: 0 0 1px black;
      border-radius: 0;
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
  -webkit-background-clip: text;
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
  box-shadow: 0 0 8px black;
  border-radius: 4px;
  padding: calc(${margin} * 2);
  transition: box-shadow 0.25s ease-in-out;
`;
const OutLineTL = styled.div`
  position: absolute;
  height: 0%;
  width: 0%;
  background-image: url("backgrounds/gold-gradient-text.png");
  background-size: 100% 100%;
  box-shadow: 0 0 1px gold;
  transition: height 0.25s ease-in-out, width 0.25s ease-in-out;
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
  transition: height 0.25s ease-in-out, width 0.25s ease-in-out;
`;
export default function ({ children }) {
  return (
    <GoldTextS>
      <OutLineTL className="on-hover" />
      <OutLineBR className="on-hover" />
      <BlackBackS className="black-back-on-hover">{children}</BlackBackS>
      <TextS>{children}</TextS>
    </GoldTextS>
  );
}
