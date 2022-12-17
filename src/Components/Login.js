import { useAuth0 } from "@auth0/auth0-react";
import { Background } from "./Styles/Login.styled";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  return (
    <Background>
      <div>
        <div>
          <img></img>
          <p>Todo App</p>
        </div>
        <div>
          <button onClick={() => loginWithRedirect()}>Login</button>
          <button onClick={() => loginWithRedirect()}>Signup</button>
        </div>
      </div>
      <h1>Organizing your day activity with Todo App</h1>
      <div>
        <button onClick={() => loginWithRedirect()}>Get started</button>
        <img></img>
      </div>
      <h2>Don’t let your day doing nothing</h2>
      <div>
        <div>
          <img></img>
          <p>Small task</p>
        </div>
        <div>
          <img></img>
          <p>Write it</p>
        </div>
        <div>
          <img></img>
          <p>Do it</p>
        </div>
        <div>
          <img></img>
          <p>Repeat</p>
        </div>
      </div>
      <div>
        <div>
          <img></img>
        </div>
        <div>
          <h3>Achieve your target and won your life</h3>
          <button onClick={() => loginWithRedirect()}>Get Started</button>
        </div>
      </div>
      <div>
        <div>
          <div>
            <img></img>
            <p>Lets change your habit join with million people</p>
          </div>
          <div>
            <p>DK Tech Company</p>
            <p>Uma Street, Lost City, Aincard </p>
          </div>
        </div>

        <div>
          <div>
            <p>Features</p>
            <br></br>
            <p>Lorem</p>
            <p>Ipsum</p>
            <p>Sit</p>
            <p>Dolor</p>
          </div>
          <div>
            <p>Pricing</p>
            <br></br>
            <p>Lorem</p>
            <p>Ipsum</p>
            <p>Sit</p>
            <p>Dolor</p>
          </div>
        </div>
      </div>
    </Background>
  );
};
