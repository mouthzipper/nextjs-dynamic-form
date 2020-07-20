import styled from 'styled-components';
import Select from 'react-select';

const StyledSelect = styled(Select)`
  & > div {
    font-size: 1rem;
    padding: 1px 0;
    border-color: rgb(226, 232, 240);
    border-radius: 0.25rem;
    & > div {
      padding: 0 1rem;
    }
  }
`;

type SelectProps = {
  options: string[];
  isMulti: boolean;
  name: string;
};

const FormSelect = (props: SelectProps) => {
  const { options, ...rest } = props;
  const optionValues = options.map((item) => ({ value: item, label: item }));

  return <StyledSelect {...rest} options={optionValues} />;
};

export default FormSelect;
