import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  font-size: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2.5rem;
  border-color: rgb(226, 232, 240);
  border-radius: 0.25rem;
  border-width: 1px;
  border-style: solid;
`;

interface InputProps {
  type: string;
  name: string;
  id: string;
  title: string;
  register: any;
  validations: object;
  placeholder: string;
}

const Input = (props: InputProps) => {
  const { register, validations, type, ...rest } = props;
  const isDate = type === 'date';
  const now = new Date().toISOString().split('T')[0];
  const maxAtr = isDate ? { max: now } : '';
  return (
    <StyledInput
      ref={register(validations)}
      type={type}
      {...maxAtr}
      {...rest}
    />
  );
};

export default Input;
