import styled from "styled-components";
import { ITaskProps } from "../../Types/index";
import { borderRadius } from "./Global";

export const StyledTask = styled.div`
  align-self: center;
  margin: 2rem 1rem;
  width: 80%;
  @media screen and (max-width: 400px) {
    margin: 1rem 0rem;
  }
`;

export const TitleTask = styled.div<ITaskProps>`
  display: flex;
  align-items: center;
  background-color: ${(props: ITaskProps) => props.theme[0]};
  border-radius: ${borderRadius} ${borderRadius} 0rem 0rem;
  justify-content: space-between;
  height: 4rem;
  padding: 0.5rem 2rem;

  h2 {
    color: ${(props: ITaskProps) =>
      props.theme[0] == "black" ? "white" : "black"};
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;

    div {
      display: flex;
    }
  }
`;

export const ContentTask = styled.div<ITaskProps>`
  display: ${(props: ITaskProps) => (props.detail ? "flex" : "1")};
  align-items: center;
  background-color: ${(props: ITaskProps) => props.theme[1]};
  border-radius: 0px 0px ${borderRadius} ${borderRadius};
  justify-content: space-between;
  padding: 0.5rem 2rem;

  img {
    border-radius: ${borderRadius};
    margin-right: 0.25rem;
    width: 10rem;
  }

  p {
    font-size: 0.875rem;
    margin-right: 2rem;
    text-align: justify;

    &.highlight {
      font-weight: 700;
    }
  }

  @media screen and (max-width: 400px) {
    flex-direction: ${(props: ITaskProps) => (props.detail ? "column" : "row")};
    img {
      margin: 0;
    }
  }
`;
