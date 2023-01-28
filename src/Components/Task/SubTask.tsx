import { useContext, useState } from "react";
import { updateSubtasks } from "../API Requests/Requests";
import { StyledButton } from "../Buttons/Buttons.styled";
import ThemeContext from "../../Contexts/ThemeContext";

const SubTask = ({ subtaskProp, allsubtasksProp, setAllSubtasksProp }) => {
  const [themes] = useContext(ThemeContext);
  const [inputName, setInputName] = useState("");
  // const [shouldUpdate, setShouldUpdate] = useState(false);

  // useEffect(() => {
  //   if (shouldUpdate) {
  //     getTaskRequest(task)
  //       .then((result) => {
  //         console.log("result", result);
  //         return result;
  //       })
  //       .catch((error) => console.log("error", error));

  //     setShouldUpdate(false);
  //   }
  // }, [shouldUpdate, task]);

  const deleteHandler = (subtask, allsubtasks) => {
    console.log("delete", subtask);
    console.log("delete", allsubtasks);
    const newAllSubTasks = allsubtasks.filter((st) => {
      return st.id !== subtask.id;
    });

    const raws = JSON.stringify(newAllSubTasks);
    updateSubtasks(raws, subtask.taskId)
      .then((result) => {
        console.log("deleteRequest", result);
        const resultParsed = JSON.parse(result.subtasks);
        setAllSubtasksProp(resultParsed);
        return result;
      })
      .catch((error) => console.log("error", error));
  };

  const editHandler = (subtask, allsubtasks, inputName) => {
    const newAllSubTasks = allsubtasks.map((st, index) => {
      console.log("subtask", subtask);
      console.log("inputName", inputName);
      console.log("st", st);

      if (st.id === subtask.id) {
        allsubtasks[index].name = inputName;
        return allsubtasks;
      }
    });

    console.log("newsubtask:", newAllSubTasks[0]);

    const raws = JSON.stringify(newAllSubTasks[0]);
    console.log("raws:", raws);
    updateSubtasks(raws, subtask.taskId)
      .then((result) => {
        console.log("updateResult:", result); // es toda la task
        // re render subtasks list
        const resultParsed = JSON.parse(result.subtasks);
        setAllSubtasksProp(resultParsed);
        return result;
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <li style={{ display: "flex" }}>
      <p>
        {subtaskProp.name} Task:{console.log("subtp:", subtaskProp.name)}
      </p>
      <textarea
        value={subtaskProp.name ? subtaskProp.name : inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
      ></textarea>
      <StyledButton
        theme={themes[0]}
        onClick={() => {
          deleteHandler(subtaskProp, allsubtasksProp);
        }}
      >
        Delete
      </StyledButton>
      <StyledButton
        theme={themes[0]}
        onClick={() => {
          editHandler(subtaskProp, allsubtasksProp, inputName);
        }}
      >
        edit
      </StyledButton>
    </li>
  );
};

export default SubTask;
