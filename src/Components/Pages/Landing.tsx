import { useAuth0 } from "@auth0/auth0-react";
import { StyledLanding, StyledCTAButton } from "./Landing.styled";
import navbarimg from "../../Img/navbar.png";
import organizing from "../../Img/organizing.png";
import features from "../../Img/features.png";
import goal from "../../Img/goal.png";
import footer from "../../Img/footer.png";

const Landing = () => {
  const { loginWithRedirect } = useAuth0();

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  return (
    <StyledLanding>
      <div className="Landing__nav">
        <img src={navbarimg as string} alt="app logotype" />
      </div>
      <div className="Landing__cta">
        <h1>
          Organizing your day activity
          <br />
          with TaskMate
        </h1>
        <StyledCTAButton onClick={() => void loginWithRedirect()}>
          Get started
        </StyledCTAButton>
        <img src={organizing as string} alt="app logotype" />
      </div>
      <div className="Landing__features">
        <h2>Don’t let your day doing nothing</h2>
        <img src={features as string} alt="app logotype" />
      </div>
      <div className="Landing__goal">
        <img src={goal as string} alt="app logotype" />
        <div>
          <h3>
            Achieve your target <br />
            and won your life
          </h3>
          <StyledCTAButton onClick={() => void loginWithRedirect()}>
            Get Started
          </StyledCTAButton>
        </div>
      </div>
      <div className="Landing__nav">
        <img src={footer as string} alt="app logotype" />
      </div>
    </StyledLanding>
  );
};

export default Landing;
