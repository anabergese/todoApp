import styled from "styled-components";

export const StyledColorTheme = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  button {
    min-width: 1rem;
    min-height: 1rem;
    margin: 2rem 0.6rem;
    border-radius: 0.25rem;
    border: 0.06rem solid #dadce0;
    cursor: pointer;

    &.active {
      min-width: 1.6rem;
      min-height: 1.6rem;
    }
  }

  @media screen and (max-width: 400px) {
    justify-content: center;
  }
`;
