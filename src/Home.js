import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>What's the plan for today?</h1>
      <div>
        <h2>See all tasks</h2>
        <Link to="/tasks">Go ></Link>
      </div>
      <div>
        <h2>Create a new task</h2>
        <Link to="/task/create">Go ></Link>
      </div>
    </div>
  );
};

export default Home;
