import { useAuth0 } from "@auth0/auth0-react";
import { StyledLanding, StyledCTAButton } from "./Landing.styled";
import taskmate from "../../Img/taskmatelogo.png";
import organizing from "../../Img/organizing.png";
import tasks from "../../Img/fluent_tasks.svg";
import event from "../../Img/event_repeat.svg";
import note from "../../Img/note_edit.svg";
import history from "../../Img/work_history.svg";
import facebook from "../../Img/facebook.png";
import linkedin from "../../Img/linkedin.png";
import goal from "../../Img/goal.png";
import instagram from "../../Img/instagram.png";

const Landing = () => {
  const { loginWithRedirect } = useAuth0();
  console.log("LOCATION", window.location.origin);

  return (
    <StyledLanding>
      <header>
        <nav>
          <img src={taskmate as string} alt="TaskMate Logo" />
          <div>
            <button onClick={() => void loginWithRedirect()}>Log in</button>
            <button
              onClick={() => void loginWithRedirect()}
              style={{ color: "#FF4F5A" }}
            >
              Sign up
            </button>
          </div>
        </nav>
      </header>
      <section className="section1">
        <h1>
          Focus on what matters <br />
          with TaskMate
        </h1>
        <StyledCTAButton onClick={() => void loginWithRedirect()}>
          Get Started
        </StyledCTAButton>
        <img src={organizing as string} alt="Man in a desk" />
      </section>

      <section className="section2">
        <h2>Don’t let your day doing nothing</h2>
        <div className="icon-container">
          <div className="icon">
            <img src={tasks as string} alt="Fluent tasks" />
            <h3>Small task</h3>
          </div>
          <div className="icon">
            <img src={note as string} alt="Fluent tasks" />
            <h3>Write it</h3>
          </div>
          <div className="icon">
            <img src={history as string} alt="Fluent tasks" />
            <h3>Do it</h3>
          </div>
          <div className="icon">
            <img src={event as string} alt="Fluent tasks" />
            <h3>Repeat</h3>
          </div>
        </div>
      </section>

      <section className="section3">
        <div className="image-container">
          <img src={goal as string} alt="Your Goals" />
        </div>
        <div className="content-container">
          <h2>
            Achieve your target <br />
            and win your life
          </h2>
          <StyledCTAButton onClick={() => void loginWithRedirect()}>
            Get Started
          </StyledCTAButton>
        </div>
      </section>

      <footer>
        <div className="brand-container">
          <img src={taskmate as string} alt="TaskMate Logo" />
        </div>
        <div className="info-container">
          <p>123 Main Street, Anytown Spain</p>
          <p>&copy; 2023 TaskMate. All Rights Reserved.</p>
          <a href="https://commission.europa.eu/">Privacy Policy</a>
          <a href="https://commission.europa.eu/">Contact Us</a>
        </div>
        <div className="social-container">
          <a href="https://www.facebook.com/">
            {" "}
            <img src={facebook as string} alt="Facebook Logo" />
          </a>
          <a href="https://www.instagram.com/">
            {" "}
            <img src={instagram as string} alt="Instagram Logo" />
          </a>
          <a href="https://www.linkedin.com/">
            {" "}
            <img src={linkedin as string} alt="Linkedin Logo" />
          </a>
        </div>
      </footer>
    </StyledLanding>
  );
};

export default Landing;
