import { StyledHome } from "./Styles/Home.styled";
import { Content } from "./Styles/Global";
import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";
import { StyledLink, StyledButton } from "./Styles/Buttons.styled";

const Home = () => {
  const { themes } = useContext(ThemeContext);

  return (
    <Content>
      <h1>What&apos;s the plan for today?</h1>
      <StyledHome theme={themes}>
        <h3>See all tasks</h3>
        <StyledButton theme={themes}>
          <StyledLink as="a" href="/tasks">
            Go
          </StyledLink>
        </StyledButton>
      </StyledHome>
      <StyledHome theme={themes}>
        <h3>Create a new task</h3>
        <StyledButton theme={themes}>
          <StyledLink as="a" href="/task/create">
            Go
          </StyledLink>
        </StyledButton>
      </StyledHome>
    </Content>
  );
};

export default Home;
