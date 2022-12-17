import { useAuth0 } from "@auth0/auth0-react";
import { Background } from "./Styles/Login.styled";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  return (
    <Background>
      <h1>Todo App</h1>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </Background>
  );
};
