import styled from "styled-components";

export const StyledProfile = styled.div`
  display: flex;
  align-items: flex-end;

  margin-left: 2rem;
  margin-bottom: 2rem;
  flex-grow: 1;
  img {
    border-radius: 50%;
    width: 48px;
    heigth: 48px;
  }
  div {
    flex-grow: 1;
    margin-left: 1rem;
    p {
      font-weight: bold;
      margin: 0;
    }
    button {
      coursor: pointer !important;
      border: none;
      padding: 0;
      margin: 0;
      background-color: transparent;
    }
  }
`;
