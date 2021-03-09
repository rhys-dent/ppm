import styled from "styled-components";

const MenuButtonS = styled.img`
  display: ${(props) => props.theme.header.nav.menu.menuButton.display};
  height: calc(${(props) => props.theme.header.height} - 20px);
  width: calc(100%-20px);
  margin: 10px;
  margin-left: auto;
`;

export default function ({ onClick }) {
  return (
    <MenuButtonS onClick={onClick} src="icons/menu-icon.png" height="100%" />
  );
}
