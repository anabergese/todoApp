import styled from "styled-components";

export const StyledMood = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  align-self: center;
  max-height: 10%;
  min-width: 80%;
  margin: 2rem 1rem;
  padding: 0.5rem 2rem;

  img {
    width: 50px;
    height: 50px;
  }

  p {
    font-size: 0.875rem;
    font-weight: bold;
    text-align: center;
  }
  @media screen and (max-width: 400px) {
    padding: 0.5rem 1rem;
  }
`;

export const StyledCardMood = styled.button`
  text-decoration: none;
  background-color: #e6e6e6;
  padding: 2% 3%;
  border-radius: 0.5rem;
  border: none;
`;

export const StyledSelectedMood = styled.div`
  background-color: #e6e6e6;
  padding: 2% 3%;
  border-radius: 0.5rem;
  border: none;
`;
