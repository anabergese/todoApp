import {
  FunctionComponent,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import { updateSubtasks } from "../API Requests/Requests";
import { StyledButton } from "../Buttons/Buttons.styled";
import ThemeContext from "../../Contexts/ThemeContext";
import { SubTaskStyled } from "../SubTask/SubTask.styled";
import { ISubtask, SubtaskProps } from "../../Types";

const SubTask: FunctionComponent<{
  allSubTasks: SubtaskProps["allSubtasksProp"];
  subtask: ISubtask;
  setAllSubTasks: SubtaskProps["setAllSubtasksProps"];
}> = ({ subtask, allSubTasks, setAllSubTasks }) => {
  const [themes] = useContext(ThemeContext);
  const [inputName, setInputName] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(0, -1);
    }
  }, [isEditMode]);

  const handleSubmitEdit = () => {
    setIsEditMode(true);
  };

  const deleteHandler = (subtask: ISubtask, allsubtasks: ISubtask[]) => {
    const newAllSubTasks = allsubtasks.filter((st) => {
      return st.id !== subtask.id;
    });

    updateSubtasks(newAllSubTasks, subtask.task_id)
      .then((result) => {
        setAllSubTasks(result.subtasks);
        return allSubTasks;
      })
      .catch((error) => console.log("error", error));
  };

  const editHandler = (
    subtask: ISubtask,
    allsubtasks: ISubtask[],
    inputName: string
  ) => {
    allsubtasks.map((st, index) => {
      if (st.id === subtask.id) {
        allsubtasks[index].name = inputName;
        return allsubtasks;
      }
    });

    updateSubtasks(allsubtasks, subtask.task_id)
      .then((result) => {
        setAllSubTasks(result.subtasks);
        setIsEditMode(false);
        return allSubTasks;
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <SubTaskStyled theme={themes}>
      {isEditMode ? (
        <>
          <textarea
            ref={textareaRef}
            value={inputName || subtask.name}
            onChange={(e) => {
              setInputName(e.target.value);
            }}
            onBlur={() => {
              setIsEditMode(false);
            }}
          ></textarea>
          <StyledButton
            theme={themes}
            className="Task__SubTask__Done"
            onClick={() => {
              const nameToAdd = inputName ? inputName : subtask.name;
              editHandler(subtask, allSubTasks, nameToAdd);
            }}
          >
            Done
          </StyledButton>
        </>
      ) : (
        <button className="Task__SubTask__Name" onClick={handleSubmitEdit}>
          {subtask.name}
        </button>
      )}

      <StyledButton
        theme={themes}
        className="Task__SubTask__Delete"
        onClick={() => {
          deleteHandler(subtask, allSubTasks);
        }}
        subtaskbtn
      >
        Delete
      </StyledButton>
    </SubTaskStyled>
  );
};

export default SubTask;
