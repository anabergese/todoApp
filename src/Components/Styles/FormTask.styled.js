import styled from "styled-components";

export const StyledFormTask = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  min-width: 40%;
  margin: 2rem 1rem;
  color: #333;
  background-color: ${(props) => props.theme[0]};

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
