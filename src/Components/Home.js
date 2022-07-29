import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="content">
      <h1>What&apos;s the plan for today?</h1>
      <div className="home-content">
        <h2>See all tasks</h2>
        <Link to="/tasks" className="buttons home">
          Go
        </Link>
      </div>
      <div className="home-content">
        <h2>Create a new task</h2>
        <Link to="/task/create" className="buttons home">
          Go
        </Link>
      </div>
    </div>
  );
};

export default Home;
