import styled from "styled-components";
import { IButtonsProps } from "../../Types/index";

export const SubTaskStyled = styled.div.attrs({
  className: "Task_Subtask",
})<IButtonsProps>`
   {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  button,
  textarea {
    background-color: ${(props: IButtonsProps) => props.theme[1]};
    border: none;
  }

  .Task__SubTask__Name {
    background-color: ${(props: IButtonsProps) => props.theme[1]};
    cursor: pointer;
    text-align: left;
    width: 5rem;
  }
  .Task__SubTask__Name:hover {
    text-decoration: underline;
  }

  .Task__SubTask__Delete {
    margin: 0.25rem;
    border: 2px solid ${(props: IButtonsProps) => props.theme[0]};
  }

  .Task__SubTask__Done {
    background-color: ${(props: IButtonsProps) => props.theme[0]};
    border: 2px solid ${(props: IButtonsProps) => props.theme[0]};
  }
`;
