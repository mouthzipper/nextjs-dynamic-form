import styled from 'styled-components';

const ErrorMessage = styled.p`
  font-size: 1rem;
  color: red;
  margin: 5px 0;
`;

const errorMessagesByTypeAndName = (type, name) => {
  const maxChar = name === 'First Name' ? 20 : 40;
  return {
    required: `${name} is required.`,
    minLength: `${name} can't be less than 2 characters.`,
    maxLength: `${name} can be greater than ${maxChar} characters.`,
  }[type];
};

type ErrorProps = {
  type: string;
  name: string;
};

const Error = (props: ErrorProps) => {
  const { type, name } = props;
  const message = errorMessagesByTypeAndName(type, name);
  return <ErrorMessage>{message}</ErrorMessage>;
};

export default Error;
