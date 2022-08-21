import styled from "styled-components";

export const Sidenav = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  overflow-x: auto;
  padding-top: 5.65rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme[0]};

  a {
    padding: 1rem 4rem 1rem 2rem;
    text-decoration: none;

    h2 {
      font-size: 1.2rem;
      color: ${(props) =>
        props.theme[0] === "black" ? props.theme[1] : "black"};
    }

    &:hover {
      background-color: white;
      h2 {
        color: black;
      }
    }
  }
`;
