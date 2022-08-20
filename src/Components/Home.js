import { Link } from "react-router-dom";
import { StyledHome } from "./Styles/Home.styled";
import { Content } from "./Styles/Global.styled";
import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";
import { StyledButton } from "./Styles/Button.styled";

const Home = () => {
  const { themes } = useContext(ThemeContext);

  return (
    <Content>
      <h1>What&apos;s the plan for today?</h1>
      <StyledHome theme={themes}>
        <h3>See all tasks</h3>
        <StyledButton as="a" href="/tasks">
          Go
        </StyledButton>
      </StyledHome>
      <StyledHome theme={themes}>
        <h3>Create a new task</h3>
        <StyledButton as="a" href="/task/create">
          Go
        </StyledButton>
      </StyledHome>
    </Content>
  );
};

export default Home;
