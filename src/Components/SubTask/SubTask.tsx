import { FunctionComponent, useContext, useState } from "react";
import { updateSubtasks } from "../API Requests/Requests";
import { StyledButton } from "../Buttons/Buttons.styled";
import ThemeContext from "../../Contexts/ThemeContext";
import { SubTaskStyled } from "../SubTask/SubTask.styled";
import { ISubtasks } from "../../Types";

const SubTask: FunctionComponent<{
  allsubtasksProp: ISubtasks[];
  subtaskProp: ISubtasks;
  setAllSubtasksProp: Function; // See fix
}> = ({ subtaskProp, allsubtasksProp, setAllSubtasksProp }) => {
  const [themes] = useContext(ThemeContext);
  const [inputName, setInputName] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  const deleteHandler = (subtask: ISubtasks, allsubtasks: ISubtasks[]) => {
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

  const editHandler = (
    subtask: ISubtasks,
    allsubtasks: ISubtasks[],
    inputName: string
  ) => {
    const newAllSubTasks = allsubtasks.map((st, index) => {
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
    <SubTaskStyled>
      {isEditMode ? (
        <>
          <textarea
            value={inputName || subtaskProp.name}
            onChange={(e) => {
              setInputName(e.target.value);
            }}
          ></textarea>
          <StyledButton
            theme={themes[0]}
            onClick={() => {
              editHandler(subtaskProp, allsubtasksProp, inputName);
              setIsEditMode(false);
            }}
          >
            Done
          </StyledButton>
        </>
      ) : (
        <button
          onClick={() => {
            setIsEditMode(true);
          }}
        >
          <p>{subtaskProp.name}</p>
        </button>
      )}

      <StyledButton
        theme={themes[0]}
        onClick={() => {
          deleteHandler(subtaskProp, allsubtasksProp);
        }}
      >
        Delete
      </StyledButton>
    </SubTaskStyled>
  );
};

export default SubTask;
