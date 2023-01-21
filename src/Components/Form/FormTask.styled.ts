import styled from "styled-components";
import { IThemeProps } from "../../Types/index";
import { border, borderRadius, flexColumn } from "../App/Global";

export const StyledFormTask = styled.form`
  ${flexColumn}
  align-items: center;
`;

export const FormBody = styled.div<IThemeProps>`
  ${flexColumn}
  ${border}
  background-color: ${(props: IThemeProps) => props.theme[0]};

  h1 {
    color: ${(props: IThemeProps) =>
      props.theme[0] === "black" ? props.theme[1] : "black"};
    padding: 1.5rem 0;
  }

  label {
    background-color: ${(props: IThemeProps) => props.theme[1]};
    padding: 1rem 3rem;
    h2 {
      padding-bottom: 0.5rem;
      text-align: left;
    }

    &:nth-child(2) {
      padding-top: 3rem;
    }

    &:nth-child(5) {
      border-bottom-left-radius: ${borderRadius};
      border-bottom-right-radius: ${borderRadius};
      padding-bottom: 3rem;
    }
  }

  input {
    ${border}
    height: 2rem;
    width: 100%;
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
      width: 8rem;
    }
  }
`;
