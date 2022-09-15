import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 60px;
  grid-template:
    "header" 100px
    "main" auto /
    auto;
`;