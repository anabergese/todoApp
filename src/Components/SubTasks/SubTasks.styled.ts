import styled from "styled-components";
import { borderRadius } from "../App/Global";
import { IButtonsProps } from "../../Types/index";

export const SubTaskForm = styled.form.attrs({
  className: "Task__Subtask__Form",
})<IButtonsProps>`
  input {
    border: none;
    border-top-left-radius: ${borderRadius};
    border-bottom-left-radius: ${borderRadius};
    padding: 0.25rem;
  }

  button {
    background-color: ${(props: IButtonsProps) => props.theme[0]};
    border: none;
    border-top-right-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
    cursor: pointer;
    padding: 0.25rem 0.5rem;
  }
`;
