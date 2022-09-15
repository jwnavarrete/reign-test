import styled from "styled-components";

export const Button = styled.button`
  background-color: #fcfcfc; /* Green background */
  border: 1px solid rgb(86, 93, 86); /* Green border */
  color: rgb(70, 69, 69); /* White text */
  padding: 10px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
  min-width: 100px;

  ${(props) =>
    props.active &&
    `
   border: 1.5px solid #3266b5;
  color: #3266b5;
    `}

  :hover {
    background-color: #3266b5;
    color: #fcfcfc;
  }
`;
