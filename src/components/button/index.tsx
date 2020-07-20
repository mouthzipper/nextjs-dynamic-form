import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
const StyledButton = styled.button`
  background: #009688;
  color: white;
  height: 40px;
  width: 140px;
  margin-top: 10px;
  border-radius: 4px;
  border: none;
`;

const Button = () => {
  const { errors } = useFormContext();
  const disableButton = Object.keys(errors).length > 0;
  return (
    <StyledButton type="submit" disabled={disableButton}>
      Export As CSV
    </StyledButton>
  );
};

export default Button;
