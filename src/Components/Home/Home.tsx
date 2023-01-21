import { FunctionComponent } from "react";
import { StyledHome } from "./Home.styled";
import { StyledButton } from "../Buttons/Buttons.styled";
import { Content } from "../App/Global";
import { useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext";
import { useNavigate } from "react-router-dom";

const Home: FunctionComponent = () => {
  const [themes] = useContext(ThemeContext);
  const navigate = useNavigate();

  const routeChange = (route: string) => {
    navigate(route);
  };

  return (
    <Content>
      <h1 data-testid="h1home">What&apos;s the plan for today?</h1>
      <StyledHome theme={themes}>
        <h2>See all tasks</h2>
        <StyledButton theme={themes} onClick={() => routeChange("/tasks")}>
          Go Tasks
        </StyledButton>
      </StyledHome>
      <StyledHome theme={themes}>
        <h2>Create a new task</h2>
        <StyledButton
          theme={themes}
          onClick={() => routeChange("/task/create")}
        >
          Go Create
        </StyledButton>
      </StyledHome>
    </Content>
  );
};

export default Home;
