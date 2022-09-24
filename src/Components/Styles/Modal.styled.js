import styled from "styled-components";

export const StyledModal = styled.div`
  background-color: ${(props) =>
    props.theme[0] == "black" ? "white" : props.theme[0]};
  text-align: center;
  border-radius: 8px;
  z-index: 1000;

  h1 {
    padding: 1rem 1.6rem;
  }
`;
