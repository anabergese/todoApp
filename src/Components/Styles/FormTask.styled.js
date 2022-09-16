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
    color: ${(props) =>
      props.theme[0] === "black" ? props.theme[1] : "black"};
  }

  label {
    h2 {
      text-align: left;
    }
    padding: 1rem 4rem;
    background-color: ${(props) => props.theme[1]};
    &:last-child {
      padding-bottom: 3rem;
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }
  }

  input {
    font-size: 0.8rem;
    min-width: 100%;
    border-radius: 0.25rem;
    border-color: transparent;
  }

  @media screen and (max-width: 400px) {
    margin: 0;

    label {
      padding: 0.5rem 2rem;
      &:last-child {
        padding-bottom: 2rem;
      }
    }

    input {
      font-size: 0.8rem;
      max-width: 8rem;
    }
  }
`;
