import { StyledHome } from "./Styles/Home.styled";
import { Content } from "./Styles/Global";
import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";
import { StyledLink, StyledButton } from "./Styles/Buttons.styled";

const Home = () => {
  const { themes } = useContext(ThemeContext);

  return (
    <Content>
      <header role="banner" aria-label="What is the plan for today?">
        <h1>What&apos;s the plan for today?</h1>
      </header>
      <StyledHome theme={themes}>
        <h2>See all tasks</h2>
        <StyledButton theme={themes}>
          <StyledLink as="a" href="/tasks">
            Go Tasks
          </StyledLink>
        </StyledButton>
      </StyledHome>
      <StyledHome theme={themes}>
        <h2>Create a new task</h2>
        <StyledButton theme={themes}>
          <StyledLink as="a" href="/task/create">
            Go Create
          </StyledLink>
        </StyledButton>
      </StyledHome>
    </Content>
  );
};

export default Home;
