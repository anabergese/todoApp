import styled from "styled-components";

export const StyledCallButton = styled.button`
  height: 38px;
  width: 160px;
  left: 748px;
  top: 364px;
  border-radius: 8px;
  border-style: none;
  background-color: #ff4f5a;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

export const StyledLanding = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 1% 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 72%;
  }
`;

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 1.8rem;
    width: 35rem;
    margin-top: 72px !important;
    margin-bottom: 12px !important;
  }

  img {
    width: 54%;
    margin-top: 48px;
  }
`;

export const StyledFeatures = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 1.8rem;
    width: 35rem;
    margin-top: 180px !important;
    margin-bottom: 56px !important;
  }
  img {
    width: 64%;
  }
`;

export const StyledGoal = styled.div`
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
    width: 35rem;
    margin-top: 48px !important;
    margin-bottom: 28px !important;
  }
`;
