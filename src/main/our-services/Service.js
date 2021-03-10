import styled from "styled-components";

const ServiceS = styled.div`
  --main-height: ${(props) => props.theme.main.height};
  --height: calc(var(--main-height) / 2);
  min-height: var(--main-height);
  padding-bottom: calc(var(--main-height) / 4);
`;
const InnerBoxS = styled.div`
  --main-height: ${(props) => props.theme.main.height};
  --height: calc(var(--main-height) / 2);
  box-sizing: border-box;
  position: relative;
  display: ${(props) => props.theme.main.ourServices.service.display};
  grid-template-columns: auto min-content;
  height: ${(props) => props.theme.main.ourServices.service.height};
  width: ${(props) => props.theme.main.ourServices.service.width};
  margin: 0 auto;
  top: calc(var(--height) / 2);
  img {
    order: ${(props) => props.theme.main.ourServices.service.icon.order};
    height: calc(var(--height));
  }
`;
const InfoS = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  order: ${(props) => props.theme.main.ourServices.service.info.order};
  div {
    padding-top: 1rem;
    padding-right: 1rem;
  }
`;
export default function (props) {
  return (
    <ServiceS id={props.id}>
      <InnerBoxS className="frosted-glass">
        <img src={props.icon} />
        <InfoS>
          <h2 className="white-smoke-title">{props.title}</h2>
          <div>{props.text}</div>
        </InfoS>
      </InnerBoxS>
    </ServiceS>
  );
}
