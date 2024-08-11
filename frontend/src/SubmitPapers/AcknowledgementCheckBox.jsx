import React, { useState } from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  max-width: 550px;
  margin: 20px auto;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top:10px;
  font-size: 12px;
  color: #333;

  input {
    margin-right: 10px;
  }

  &:first-child input {
    width: 18px;  // Smaller checkbox size
    height: 18px;
  }

  &:last-child input {
    width: 18px;  // Larger checkbox size
    height: 18px;
  }
`;

const AcknowledgementCheckbox = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  return (
    <CheckboxWrapper>
      <CheckboxLabel>
        <input
          type="checkbox"
          checked={isChecked1}
          onChange={(e) => setIsChecked1(e.target.checked)}
        />
        I acknowledge that the details entered above is correct
      </CheckboxLabel>
      <CheckboxLabel>
        <input
          type="checkbox"
          checked={isChecked2}
          onChange={(e) => setIsChecked2(e.target.checked)}
        />
        The question paper is clearly visible and have double-checked it before uploading.
      </CheckboxLabel>
    </CheckboxWrapper>
  );
};

export default AcknowledgementCheckbox;
