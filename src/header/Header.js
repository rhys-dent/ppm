import { useContext, useRef } from "react";
import styled from "styled-components";
import Context from "../Context";
import NavLink from "./NavLink";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import { Link } from "react-router-dom";
import GoldNavLink from "../common/GoldNavLink";

const HeaderS = styled.header`
  position: relative;
  height: ${(props) => props.theme.header.height};
  background-image: url("backgrounds/header-4096.png");
  background-size: 100% 100%;
  z-index: ${(props) => props.theme.header.zIndex};
  box-shadow: 0 4px 8px black;
`;
const NavS = styled.nav`
  display: grid;
  grid-template-columns: min-content auto;
`;
const MenuS = styled.article`
  margin-left: ${(props) => props.theme.header.nav.menu.marginLeft};
`;
const NavLinksS = styled.ul`
  height: ${(props) => props.theme.header.nav.menu.navLinks.height};

  display: ${(props) => props.theme.header.nav.menu.navLinks.display};
  flex-direction: ${(props) =>
    props.theme.header.nav.menu.navLinks.flexDirection};
  justify-content: space-evenly;
  align-items: center;

  list-style: none;
`;
export default function () {
  const context = useContext(Context);
  const navLinks = useRef();
  return (
    <HeaderS>
      <NavS>
        <Logo />
        <MenuS>
          <MenuButton
            onClick={() => {
              const display = navLinks.current.style.display;
              navLinks.current.style.display =
                display === "flex" ? "none" : "flex";
            }}
          />
          <NavLinksS ref={navLinks}>
            {context.mains.map((main) => (
              <Link to={main.path} onClick={() => context.refresh()}>
                <GoldNavLink>{main.title}</GoldNavLink>
              </Link>
            ))}
          </NavLinksS>
        </MenuS>
      </NavS>
    </HeaderS>
  );
}
