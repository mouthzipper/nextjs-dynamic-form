import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';

const StyledProgress = styled.progress`
  width: 100%;
  height: 20px;
`;

type ProgressProps = {
  data: string[];
};

const Progress = (props: ProgressProps) => {
  const { data } = props;
  const { errors, watch } = useFormContext();
  const dataLen = data && data.length - 1;
  const watchAllFields = watch();
  const errorsLen = Object.keys(errors).length;
  const hasValuesLen = Object.keys(watchAllFields).filter(
    (key) => watchAllFields[key]
  ).length;
  const percent = ((hasValuesLen - errorsLen) / dataLen) * 100 || 0;
  return (
    <StyledProgress id="progress" value={percent} max="100">
      32%
    </StyledProgress>
  );
};

export default Progress;
