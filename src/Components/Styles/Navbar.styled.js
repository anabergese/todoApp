import styled from "styled-components";
const theme = localStorage.getItem("theme-color") || "red";

export const Sidenav = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  overflow-x: auto;
  padding-top: 5.65rem;
  display: flex;
  flex-direction: column;
  background-color: ${theme};

  a {
    padding: 1rem 4rem 1rem 2rem;
    text-decoration: none;
    color: #333;

    h2 {
      font-size: 1.2rem;
    }
  }
`;
