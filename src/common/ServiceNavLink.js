import styled from "styled-components";
const GoldTextS = styled.div`
  display: inline-block;
  position: relative;
  :hover {
    .on-hover {
      height: 100%;
      width: 100%;
      opacity: 1;
    }
    .on-hover-2 {
      text-shadow: 0 0 1px black;
    }
    .on-hover-3 {
      background-image: none;
      background-color: black;
      background-clip: text;
    }
  }
`;
const margin = "2px";
const TextS = styled.div`
  margin: ${margin};
  position: relative;
  z-index: 5;
  background-color: transparent;
  background-image: url("backgrounds/gold-gradient-text.png");
  background-clip: text;
  background-size: 100% 100%;
  background-position: center;
  color: transparent;
  padding: calc(${margin} * 2);
  transition: background-image 0.5s ease-in-out,
    background-color 0.5s ease-in-out;
`;
const BlackBackS = styled.div`
  color: transparent;
  margin: ${margin};
  position: absolute;
  top: 0;
  text-shadow: 0 0 1px gold;
  padding: calc(${margin} * 2);
  transition: text-shadow 0.125s ease-in-out;
`;
const OutLineTL = styled.div`
  position: absolute;
  height: 100%;
  width: 0%;
  background-image: url("backgrounds/gold-gradient-text.png");
  background-size: 100% 100%;
  box-shadow: 0 0 1px gold;
  opacity: 0;
  transition: height 0.25s ease-in-out, width 0.25s ease-in-out,
    text-shadow 0.5s ease-in-out, opacity 0.125s ease-in-out;
`;
const OutLineBR = styled.div`
  position: absolute;
  height: 100%;
  width: 0%;
  bottom: 0;
  right: 0;

  background-image: url("backgrounds/gold-gradient-text.png");
  background-size: 100% 100%;
  box-shadow: 0 0 1px gold;
  opacity: 0;
  transition: height 0.25s ease-in-out, width 0.25s ease-in-out,
    text-shadow 0.5s ease-in-out, opacity 0.25s ease-in-out;
`;
export default function ({ children }) {
  return (
    <GoldTextS>
      <OutLineTL className="on-hover" />
      <OutLineBR className="on-hover" />
      <BlackBackS className="on-hover-2">{children}</BlackBackS>
      <TextS className="on-hover-3">{children}</TextS>
    </GoldTextS>
  );
}
