import { Link } from "react-router-dom";
import { StyledHome } from "./Styles/Home.styled";

const Home = () => {
  return (
    <div className="content">
      <h1>What&apos;s the plan for today?</h1>
      <StyledHome>
        <h3>See all tasks</h3>
        <Link to="/tasks" className="buttons home">
          Go
        </Link>
      </StyledHome>
      <StyledHome>
        <h3>Create a new task</h3>
        <Link to="/task/create" className="buttons home">
          Go
        </Link>
      </StyledHome>
    </div>
  );
};

export default Home;
