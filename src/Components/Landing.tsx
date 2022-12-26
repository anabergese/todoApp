import { useAuth0 } from "@auth0/auth0-react";
import {
  StyledLanding,
  StyledDiv,
  StyledLogin,
  StyledFeatures,
  StyledGoal,
  StyledCallButton,
} from "./Styles/Landing.styled";
import navbarimg from "../Images/navbar.png";
import organizing from "../Images/organizing.png";
import features from "../Images/features.png";
import goal from "../Images/goal.png";
import footer from "../Images/footer.png";

const Landing = () => {
  const { loginWithRedirect } = useAuth0();

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  return (
    <StyledLanding>
      <StyledDiv>
        <img src={navbarimg as string} alt="app logotype" />
      </StyledDiv>
      <StyledLogin>
        <h1>
          Organizing your day activity
          <br />
          with Todo App
        </h1>
        <StyledCallButton onClick={() => void loginWithRedirect()}>
          Get started
        </StyledCallButton>
        <img src={organizing as string} alt="app logotype" />
      </StyledLogin>
      <StyledFeatures>
        <h2>Don’t let your day doing nothing</h2>
        <img src={features as string} alt="app logotype" />
      </StyledFeatures>
      <StyledGoal>
        <img src={goal as string} alt="app logotype" />
        <div>
          <h3>
            Achieve your target <br />
            and won your life
          </h3>
          <StyledCallButton onClick={() => void loginWithRedirect()}>
            Get Started
          </StyledCallButton>
        </div>
      </StyledGoal>
      <StyledDiv>
        <img src={footer as string} alt="app logotype" />
      </StyledDiv>
    </StyledLanding>
  );
};

export default Landing;
