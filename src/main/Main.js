import { useContext, useEffect, useRef, useState } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import FixedBackground from "../common/FixedBackground";
import Context from "../Context";
const MainS = styled.main`
  height: ${(props) => props.theme.main.height};
  overflow-y: hidden;
`;
export default function () {
  const context = useContext(Context);

  const ref = useRef();
  useEffect(() => {
    ref.current.style.overflowY =
      context.px.main.height < ref.current.scrollHeight ? "scroll" : "hidden";
    ref.current.style.width = "100%";
  });
  return (
    <Switch>
      <MainS ref={ref}>
        {context.mains.map((main) => (
          <FixedBackground url={main.backgroundUrl}>
            <Route path={main.path} component={main.Component} />
          </FixedBackground>
        ))}
      </MainS>
    </Switch>
  );
}
