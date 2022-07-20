import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="center">
      <h3>What's the plan for today?</h3>
      <div className="home-card">
        <div className="home-content">
          <h5>See all tasks</h5>
          <Link to="/tasks" className="buttons home">
            Go
          </Link>
        </div>
      </div>
      <div className="home-card">
        <div className="home-content">
          <h5>Create a new task</h5>
          <Link to="/task/create" className="buttons home">
            Go
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
