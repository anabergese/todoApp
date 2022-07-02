const CompletedTasks = () => {

  if (localStorage.getItem('allcompletedTasks') !== null) {
    const storedCompletedTasks = localStorage.getItem("allcompletedTasks");
    return storedCompletedTasks;
  } else {
    console.log("There is not completed tasks")
  }

  return (
    <div className="task">
      <h1>All completed tasks</h1>

      <p>{storedCompletedTasks}</p>
    </div>
  );
};

export default CompletedTasks;
