/* eslint-disable jsx-a11y/no-autofocus */
import { FunctionComponent, useContext } from "react";
import { ITask, IModalProps } from "../../Types/index";
import { StyledModal } from "../Modal/Modal.styled";
import { FocusScope } from "react-aria";
import { StyledButton } from "../Buttons/Buttons.styled";
import ThemeContext from "../../Contexts/ThemeContext";

const DeleteModal: FunctionComponent<{
  task: ITask;
  showModal: IModalProps["showModal"];
  setShowModal: IModalProps["setShowModal"];
  deleteHandler: IModalProps["deleteHandler"];
}> = ({ task, showModal, setShowModal, deleteHandler }) => {
  const [themes] = useContext(ThemeContext);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <StyledModal theme={themes}>
      <FocusScope contain restoreFocus autoFocus>
        <h1> Are you sure you want to delete this task?</h1>
        <p>{task.title}</p>
        <div>
          <StyledButton
            theme={themes}
            onClick={() => {
              deleteHandler(task);
            }}
          >
            Yes
          </StyledButton>
          <StyledButton theme={themes} onClick={toggleModal}>
            No
          </StyledButton>
        </div>
      </FocusScope>
    </StyledModal>
  );
};

export default DeleteModal;
