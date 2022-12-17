import styled from "styled-components";
import { ITaskProps } from "../../Types/index";

export const StyledTask = styled.div`
  align-self: center;
  width: 80%;
  margin: 2rem 1rem;
  @media screen and (max-width: 400px) {
    margin: 1rem;
  }
`;

export const TitleTask = styled.div<ITaskProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 4rem;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem 0.5rem 0rem 0rem;
  background-color: ${(props: ITaskProps) => props.theme[0]};

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
  justify-content: space-between;
  padding: 0.5rem 2rem;
  border-radius: 0px 0px 0.5rem 0.5rem;
  background-color: ${(props: ITaskProps) => props.theme[1]};

  img {
    max-width: 10rem;
    border-radius: 0.25rem;
    margin-right: 0.25rem;
  }

  p {
    font-size: 0.875rem;
    text-align: justify;
    margin-right: 2rem;
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
