import { useContext, useEffect, useRef, useState } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import FixedBackground from "../common/FixedBackground";
import Context from "../Context";
import Footer from "../footer/Footer";
const MainS = styled.main`
  height: ${(props) => props.theme.main.height};
  overflow-y: hidden;
  overflow-x: hidden;
  scrollbar-width: thin;
`;
export default function () {
  const context = useContext(Context);
  const [scroll, setScroll] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(false);
  const ref = useRef();

  useEffect(() => {
    ref.current.style.overflowY =
      context.px.main.height < ref.current.scrollHeight ? "scroll" : "hidden";
    ref.current.style.width = "100%";
  });

  function onScroll(e) {
    setScroll(e.target.scrollTop);
  }

  return (
    <Switch>
      <MainS ref={ref} onScroll={onScroll}>
        {context.mains.map((main) => (
          <FixedBackground url={main.backgroundUrl}>
            <Route path={main.path}>{<main.Component scroll={scroll} />}</Route>
          </FixedBackground>
        ))}
        <Footer scroll={scroll} scrollDirection={scrollDirection} />
      </MainS>
    </Switch>
  );
}
