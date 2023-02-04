import { FunctionComponent, useContext, useState, useCallback } from "react";
import { updateSubtasks } from "../API Requests/Requests";
import { StyledButton } from "../Buttons/Buttons.styled";
import ThemeContext from "../../Contexts/ThemeContext";
import { SubTaskStyled } from "../SubTask/SubTask.styled";
import { ISubtask, SubtaskProps } from "../../Types";

const SubTask: FunctionComponent<{
  allsubtasksProp: SubtaskProps["allSubtasksProp"];
  subtaskProp: ISubtask;
  setAllSubtasksProp: SubtaskProps["setAllSubtasksProps"];
}> = ({ subtaskProp, allsubtasksProp, setAllSubtasksProp }) => {
  const [themes] = useContext(ThemeContext);
  const [inputName, setInputName] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  const textAreaInput = useCallback((areaElement) => {
    if (areaElement) {
      areaElement.focus();
      areaElement.setSelectionRange(0, -1);
    }
  }, []);

  const deleteHandler = (subtask: ISubtask, allsubtasks: ISubtask[]) => {
    const newAllSubTasks = allsubtasks.filter((st) => {
      return st.id !== subtask.id;
    });

    const idString = JSON.stringify(subtask.taskId);
    const raws = JSON.stringify(newAllSubTasks);
    updateSubtasks(raws, idString)
      .then((result) => {
        const resultParsed = JSON.parse(result.subtasks) as ISubtask[];
        setAllSubtasksProp(resultParsed);
        return result;
      })
      .catch((error) => console.log("error", error));
  };

  const editHandler = (
    subtask: ISubtask,
    allsubtasks: ISubtask[],
    inputName: string
  ) => {
    const newAllSubTasks = allsubtasks.map((st, index) => {
      if (st.id === subtask.id) {
        allsubtasks[index].name = inputName;
        return allsubtasks;
      }
    });

    const raws = JSON.stringify(newAllSubTasks[0]);
    updateSubtasks(raws, subtask.taskId)
      .then((result) => {
        const resultParsed = JSON.parse(result.subtasks) as ISubtask[];
        setAllSubtasksProp(resultParsed);
        return result;
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <SubTaskStyled theme={themes}>
      {isEditMode ? (
        <>
          <textarea
            value={inputName || subtaskProp.name}
            onChange={(e) => {
              setInputName(e.target.value);
            }}
            onBlur={(e) => {
              if (e.currentTarget === e.target) {
                setIsEditMode(false);
              }
            }}
            ref={textAreaInput}
          ></textarea>
          <StyledButton
            theme={themes}
            className="Task__SubTask__Done"
            onClick={() => {
              editHandler(
                subtaskProp,
                allsubtasksProp,
                inputName || subtaskProp.name
              );
              setIsEditMode(false);
            }}
          >
            Done
          </StyledButton>
        </>
      ) : (
        <button
          className="Task__SubTask__Name"
          onClick={() => {
            setIsEditMode(true);
          }}
        >
          {subtaskProp.name}
        </button>
      )}

      <StyledButton
        theme={themes}
        className="Task__SubTask__Delete"
        onClick={() => {
          deleteHandler(subtaskProp, allsubtasksProp);
        }}
        subtaskbtn
      >
        Delete
      </StyledButton>
    </SubTaskStyled>
  );
};

export default SubTask;
