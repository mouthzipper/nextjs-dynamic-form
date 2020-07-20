import React from 'react';
import styled from 'styled-components';

const StyledFieldset = styled.fieldset`
  width: 100%;
  border: none;
  padding: 10px 0;
`;

const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 10px;
  display: block;
`;

interface FieldsetProps {
  label: string;
  forLabel: string;
  children: React.ReactNode;
}

const Fieldset = (props: FieldsetProps) => {
  const { label, forLabel, children } = props;
  return (
    <StyledFieldset>
      <StyledLabel htmlFor={forLabel}>{label}</StyledLabel>
      {children}
    </StyledFieldset>
  );
};

export default Fieldset;
