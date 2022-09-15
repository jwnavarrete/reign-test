import styled from "styled-components";

export const Option = styled.option`
  color: black;
  ${(props) =>
    props.disabled &&
    `
  display: none;
  `}
`;
