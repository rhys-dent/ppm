import styled from "styled-components";

const FixedBackgroundS = styled.div`
  background-size: ${(props) =>
    props.theme.common.fixedBackground.backgroundSize};
  background-position: center;
  background-attachment: fixed;
`;

export default function ({ children, url }) {
  return (
    <FixedBackgroundS style={{ backgroundImage: `url(${url})` }}>
      {children}
    </FixedBackgroundS>
  );
}
