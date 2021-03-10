import styled from "styled-components";
const GoldTextS = styled.div`
  display: inline-block;
  position: relative;
  box-shadow: 0 0 4px black;
  border-radius: 2px;
  :hover {
    .on-hover {
      height: 100%;
      width: 100%;
    }
  }
`;
const margin = ".5rem";
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
  text-shadow: 0 0 0.5px gold;

  box-shadow: 0 0 2px white;
  padding: calc(${margin} * 2);
`;

export default function ({ children }) {
  return (
    <GoldTextS className="frosted-glass">
      <BlackBackS className="frosted-glass-black">{children}</BlackBackS>
      <TextS>{children}</TextS>
    </GoldTextS>
  );
}
