import styled from "styled-components";

export const StyledTask = styled.div`
  align-self: center;
  width: 80%;
  margin: 2rem 1rem;
`;

export const TitleTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem 0.5rem 0rem 0rem;
  background-color: ${(props) => props.theme[0]};

  h4 {
    color: ${(props) => (props.theme[0] == "black" ? "white" : "black")};
  }
`;

export const ContentTask = styled.div`
  display: ${(props) => (props.detail ? "flex" : "1")};
  align-items: center;
  justify-content: space-between;
  min-height: 6.25rem;
  padding: 0.5rem 2rem;
  border-radius: 0px 0px 0.5rem 0.5rem;
  background-color: ${(props) => props.theme[1]};

  img {
    max-width: 10rem;
    border-radius: 0.25rem;
    margin-right: 0.25rem;
  }

  p {
    &.highlight {
      font-weight: 700;
    }
  }
`;
