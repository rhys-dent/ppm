import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Context from "../Context";

const LogoS = styled.div`
  height: calc(${(props) => props.theme.header.height} - 10px);
  width: calc(100%-10px);
  margin: 5px;
`;

export default function () {
  const context = useContext(Context);
  return (
    <LogoS>
      <Link to={context.key.mains.home.path}>
        <img src="icons/prometheus-logo-128.png" height="100%" />
      </Link>
    </LogoS>
  );
}
