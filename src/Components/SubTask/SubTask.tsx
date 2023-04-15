import {
  FunctionComponent,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { updateSubtasks } from "../API Requests/Requests";
import { StyledButton } from "../Buttons/Buttons.styled";
import ThemeContext from "../../Contexts/ThemeContext";
import { SubTaskStyled } from "../SubTask/SubTask.styled";
import { ISubtask, ISubtaskProps } from "../../Types";

const SubTask: FunctionComponent<{
  allSubTasks: ISubtaskProps["allSubtasksProp"];
  subtask: ISubtask;
  setAllSubTasks: ISubtaskProps["setAllSubtasksProps"];
}> = ({ subtask, allSubTasks, setAllSubTasks }) => {
  const [themes] = useContext(ThemeContext);
  const [inputName, setInputName] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(0, -1);
    }
  }, [isEditMode]);

  const handleSubmitEdit = () => {
    setIsEditMode(true);
  };

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const currentTarget = e.currentTarget;
    requestAnimationFrame(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setIsEditMode(false);
      }
    });
  }, []);

  const deleteHandler = (subtask: ISubtask, allsubtasks: ISubtask[]) => {
    const newAllSubTasks = allsubtasks.filter((st) => {
      return st.id !== subtask.id;
    });

    updateSubtasks(newAllSubTasks, subtask.task_id)
      .then((result) => {
        if (
          typeof result === "object" &&
          result !== null &&
          "subtasks" in result
        ) {
          const taskUpdated = result;
          setAllSubTasks(taskUpdated.subtasks);
          return allSubTasks;
        } else {
          throw new Error("Invalid task update");
        }
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
        if (
          typeof result === "object" &&
          result !== null &&
          "subtasks" in result
        ) {
          const taskUpdated = result;
          setAllSubTasks(taskUpdated.subtasks);
          setIsEditMode(false);

          return allSubTasks;
        } else {
          throw new Error("Invalid task update");
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <SubTaskStyled theme={themes}>
      {isEditMode ? (
        <div className="Task__SubTask__Edit" onBlur={handleBlur}>
          <textarea
            ref={textareaRef}
            value={inputName || subtask.name}
            onChange={(e) => {
              setInputName(e.target.value);
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
        </div>
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
