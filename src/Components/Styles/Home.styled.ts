import styled from "styled-components";

type Props = {
  theme: string[];
};

export const StyledHome = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  max-height: 10%;
  min-width: 80%;
  margin: 2rem 1rem;
  padding: 0.5rem 2rem;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme[0]};

  h2 {
    color: ${(props) => (props.theme[0] == "black" ? "white" : "black")};
  }

  @media screen and (max-width: 400px) {
    padding: 0.5rem 1rem;
    h2 {
      text-align: left;
    }
  }
`;