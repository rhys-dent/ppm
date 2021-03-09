import { useContext } from "react";
import styled from "styled-components";
import Context from "../../Context";
import SilverText from "../../common/SilverText";

const NavS = styled.nav`
  background-color: firebrick;
  position: fixed;
  height: ${(props) => props.theme.main.height};
  width: ${(props) => props.theme.main.ourServices.nav.width};
  left: -${(props) => props.theme.main.ourServices.nav.width};
  background: linear-gradient(to right, black 0%, #515151 50%, black 100%);
  text-align: center;
  box-shadow: 8px 0px 4px black;
  animation: anim 1s 0s forwards;
  @keyframes anim {
    0% {
    }
    100% {
      left: 0;
    }
  }
  h2 {
    padding-top: 2rem;
    margin: 0 auto;
    left: 0;
  }
`;
const MenuS = styled.section`
  box-sizing: border-box;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  a {
    text-decoration: none;
    width: 80%;
    text-align: center;
    margin: 0 auto;
  }
`;
export default function () {
  const context = useContext(Context);
  return (
    <NavS>
      <h2 className="white-smoke-title">Our Services</h2>
      <MenuS>
        {context.services.map((service) => (
          <a href={service.href}>
            <SilverText text={service.title} />
          </a>
        ))}
      </MenuS>
    </NavS>
  );
}
