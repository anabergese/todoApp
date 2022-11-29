import styled from "styled-components";

export const StyledColorTheme = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  @media screen and (max-width: 400px) {
    justify-content: center;
  }
`;
