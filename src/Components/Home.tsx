import { FunctionComponent } from "react";
import { StyledHome } from "./Styles/Home.styled";
import { Content } from "./Styles/Global";
import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";
import { StyledLink, StyledButton } from "./Styles/Buttons.styled";

const Home: FunctionComponent = () => {
  const { themes } = useContext(ThemeContext);

  return (
    <Content>
      <h1 data-testid="h1text">What&apos;s the plan for today?</h1>
      <StyledHome theme={themes}>
        <h2>See all tasks</h2>
        <StyledLink as="a" href="/tasks">
          <StyledButton theme={themes}>Go Tasks</StyledButton>
        </StyledLink>
      </StyledHome>
      <StyledHome theme={themes}>
        <h2>Create a new task</h2>
        <StyledLink as="a" href="/task/create">
          <StyledButton theme={themes}>Go Create</StyledButton>
        </StyledLink>
      </StyledHome>
    </Content>
  );
};

export default Home;
