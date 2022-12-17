import { useAuth0 } from "@auth0/auth0-react";
import {
  StyledLanding,
  StyledDiv,
  StyledLogin,
  StyledFeatures,
  StyledGoal,
  StyledCallButton,
} from "./Styles/Login.styled";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  return (
    <StyledLanding>
      <StyledDiv>
        <img src={require("../Images/navbar.png")} alt="app logotype" />
      </StyledDiv>
      <StyledLogin>
        <h1>
          Organizing your day activity
          <br />
          with Todo App
        </h1>
        <StyledCallButton onClick={() => loginWithRedirect()}>
          Get started
        </StyledCallButton>
        <img src={require("../Images/organizing.png")} alt="app logotype" />
      </StyledLogin>
      <StyledFeatures>
        <h2>Don’t let your day doing nothing</h2>
        <img src={require("../Images/features.png")} alt="app logotype" />
      </StyledFeatures>
      <StyledGoal>
        <img src={require("../Images/goal.png")} alt="app logotype" />
        <div>
          <h3>
            Achieve your target <br />
            and won your life
          </h3>
          <StyledCallButton onClick={() => loginWithRedirect()}>
            Get Started
          </StyledCallButton>
        </div>
      </StyledGoal>
      <StyledDiv>
        <img src={require("../Images/footer.png")} alt="app logotype" />
      </StyledDiv>
    </StyledLanding>
  );
};
