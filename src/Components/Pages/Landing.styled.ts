import styled from "styled-components";
import { flexColumn } from "../App/Global";

export const StyledCTAButton = styled.button`
  background-color: #ff4f5a;
  border-radius: 8px;
  border-style: none;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  left: 748px;
  height: 38px;
  top: 364px;
  width: 160px;
`;

export const StyledLanding = styled.div`
  ${flexColumn}
  align-items: center;
  height: 100vh;
  margin: 1% 4%;
  width: 100vw;

  .Landing__nav {
    display: flex;
    justify-content: center;
    img {
      width: 72%;
    }
  }

  .Landing__cta {
    ${flexColumn}
    align-items: center;

    h1 {
      font-size: 1.8rem;
      margin-top: 72px !important;
      margin-bottom: 12px !important;
      width: 35rem;
    }

    img {
      margin-top: 48px;
      width: 54%;
    }
  }

  .Landing__features {
    ${flexColumn}
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 1.8rem;
      margin-top: 180px !important;
      margin-bottom: 56px !important;
      width: 35rem;
    }
    img {
      width: 64%;
    }
  }

  .Landing__goal {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 180px;
    margin-bottom: 200px;

    img {
      margin-left: 200px;
      margin-rigth: 180px;
      width: 30%;
    }

    div {
      margin-left: 60px;
    }

    h3 {
      font-size: 1.8rem;
      margin-top: 48px !important;
      margin-bottom: 28px !important;
      width: 35rem;
    }
  }
`;
