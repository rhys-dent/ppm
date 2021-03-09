import styled from "styled-components";

const ServiceS = styled.div`
  height: ${(props) => props.theme.main.height};
  padding: 5%;
`;
const InnerBoxS = styled.div`
  display: ${(props) => props.theme.main.ourServices.service.display};
  grid-template-columns: 1fr 1fr;
  padding: 2rem;
  img {
    order: ${(props) => props.theme.main.ourServices.service.icon.order};
  }
`;
const InfoS = styled.div`
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
        <img src={props.icon} width="100%" />
        <InfoS>
          <h2 className="white-smoke-title">{props.title}</h2>
          <div>{props.text}</div>
        </InfoS>
      </InnerBoxS>
    </ServiceS>
  );
}
