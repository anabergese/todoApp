const CompletedTasks = () => {
  const storedCompletedTasks = localStorage.getItem("allcompletedTasks");

  const completedTasks = storedCompletedTasks;

  return (
    <div className="task">
      <h1>All completed tasks</h1>

      <p>{completedTasks}</p>
    </div>
  );
};

export default CompletedTasks;
