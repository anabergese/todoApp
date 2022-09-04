import styled from "styled-components";
import { flexColumn } from "./Global";

export const StyledFormTask = styled.form`
  ${flexColumn}
  align-items: center;
`;

export const FormBody = styled.div`
  ${flexColumn}
  border-radius: 0.5rem;
  min-width: 40%;
  margin: 2rem 1rem;
  background-color: ${(props) => props.theme[0]};

  h1 {
    padding: 1rem 0;
    font-size: 1.8rem;
    color: ${(props) =>
      props.theme[0] === "black" ? props.theme[1] : "black"};
  }

  label {
    padding: 1rem 3rem;
    background-color: ${(props) => props.theme[1]};
    &:last-child {
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }
  }

  input {
    min-width: 100%;
    border-radius: 0.25rem;
    border-color: transparent;
  }
`;
