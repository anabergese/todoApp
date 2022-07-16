import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="center">
      <h1>What's the plan for today?</h1>

      <div className="task">
        <div className="task-title">
          <h2>See all tasks</h2>
          <Link to="/tasks" className="button button-3">
            Go
          </Link>
        </div>
      </div>
      <div className="task">
        <div className="task-title">
          <h2>Create a new task</h2>
          <Link to="/task/create" className="button button-3">
            Go
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
