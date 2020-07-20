import styled from 'styled-components';
import PhoneInput from 'react-phone-input-2';

const Container = styled.div`
  & .react-tel-input > input {
    font-size: 1rem;
    border-color: rgb(226, 232, 240);
    border-radius: 0.25rem;
    height: 40px;
    width: 100%;
    color: black;
  }
`;

const Phone = (props) => {
  return (
    <Container>
      <PhoneInput {...props} />
    </Container>
  );
};

export default Phone;
