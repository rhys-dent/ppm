import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Context from "../Context";

const NavLinkS = styled.div`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  background-color: red;
`;
const BlackBackgroundS = styled.div`
  position: relative;
  background-color: black;
  margin: 2.5px;
  padding: 2.5px;
  box-shadow: 0 0 4px black;
`;
const OutlineTL = styled.div`
  position: absolute;
  background-color: gold;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 2px gold;
`;
const OutlineBR = styled.div`
  position: absolute;
  background-color: gold;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 2px gold;
`;
export default function ({ title, path }) {
  const context = useContext(Context);
  return (
    <Link to={path}>
      <NavLinkS>
        <OutlineTL />
        <OutlineBR />
        <BlackBackgroundS>{title}</BlackBackgroundS>
      </NavLinkS>
    </Link>
  );
}
