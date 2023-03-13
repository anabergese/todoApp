import styled from "styled-components";
import { flexColumn } from "../App/Global";

export const StyledLandBot = styled.div`
  ${flexColumn}
  align-items: center;

  .App_Assistant {
    width: 70%;
    height: 100vh;
  }

  @media screen and (max-width: 400px) {
    .App_Assistant {
      width: 100%;
    }
  }
`;
