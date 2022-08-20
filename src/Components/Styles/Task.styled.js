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
  background-color: ${(props) => props.theme};
`;

export const ContentTask = styled.div`
  min-height: 6.25rem;
  padding: 0.5rem 2rem;
  border-radius: 0px 0px 0.5rem 0.5rem;
  background-color: grey;

  p {
    &.highlight {
      font-weight: 700;
    }
  }
`;
