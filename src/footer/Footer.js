import styled from "styled-components";

const FooterS = styled.footer`
  position: relative;
  z-index: 99;
  height: 100px;
  background-color: darkgray;
`;

export default function ({ scroll }) {
  return <FooterS>Footer</FooterS>;
}
