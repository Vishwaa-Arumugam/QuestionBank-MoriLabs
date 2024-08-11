import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const Wrapper = styled.div`

  display: flex;
//   justify-content: space-between;
  gap:10px;
  align-items: left;
  border: 1px solid #ccc;
  border-radius: 35px;
  padding: 5px 5px;
  max-width: 550px;
  height:55px;
  margin: 20px auto;
  background-color: #fff;
`;

const Section = styled.div`
  text-align: left;
  width: 20%;  // Adjusts the width of each dropdown
  height: 100%;

  &:not(:last-child) {
    border-right: 2px solid #ccc;
    padding-right: 5px;
    margin-right: 5px;
    height: 100%;
  }

  span {
    margin-top: 1px;
    margin-left:12px;
    display: block;

    font-weight: bold;
    font-size: 13px;
    color: #555;
  }

  // Adjustments for the Department section
  &:last-child {
    text-align: left;
    width: 50%;  // Increased width for department select menu
  }
    

  .custom-select-container {
    font-size: 14px;
    color: #000;
    width: 100%;
  }

  .custom-select__control {
    border: none;
    margin-left:12px;

    background-color: transparent;
    box-shadow: none;
    padding-left: 0;
  }

  .custom-select__value-container {
    padding: 0;
  }

  .custom-select__indicator-separator {
    display: none;
  }

  .custom-select__dropdown-indicator {
    display: none;
  }

  .custom-select__menu {
    border-radius: 10px;
    overflow: hidden;
  }
`;

const MoreDetails = () => {
  const [exam, setExam] = useState(null);
  const [regulation, setRegulation] = useState(null);
  const [subjectMissing, setMissing] = useState(null);

  const examOptions = [
    { value: 'CAT-1', label: 'CAT-1' },
    { value: 'CAT-2', label: 'CAT-2' },
    { value: 'SEMESTER', label: 'SEMESTER' },
  ];

  const regulationOptions = [
    { value: 'R2021', label: 'R2021' },
    { value: 'R2019', label: 'R2019' },
  ];

  const subjectMissingOptions = [
    { value: 'Yes', label: 'Yes, my subject is missing' },
    { value: 'No', label: 'No, This is not a new one' },
    // Add more options as needed
  ];

  const handleSelectChange = (type, selectedOption) => {
    switch (type) {
      case 'exam':
        setExam(selectedOption ? selectedOption.value : null);
        break;
      case 'regulation':
        setRegulation(selectedOption ? selectedOption.value : null);
        break;
      case 'missing':
        setMissing(selectedOption ? selectedOption.value : null);
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper>
      <Section>
        <span>Exam</span>
        <Select
          classNamePrefix="custom-select"
          className="custom-select-container"
          options={examOptions}
          value={examOptions.find(option => option.value === exam)}
          onChange={(selectedOption) => handleSelectChange('exam', selectedOption)}
        />
      </Section>
      <Section>
        <span>Regulation</span>
        <Select
          classNamePrefix="custom-select"
          className="custom-select-container"
          options={regulationOptions}
          value={regulationOptions.find(option => option.value === regulation)}
          onChange={(selectedOption) => handleSelectChange('regulation', selectedOption)}
        />
      </Section>
      <Section>
        <span>Is this a New Subject</span>
        <Select
          classNamePrefix="custom-select"
          className="custom-select-container"
          options={subjectMissingOptions}
          value={subjectMissingOptions.find(option => option.value === subjectMissing)}
          onChange={(selectedOption) => handleSelectChange('missing', selectedOption)}
        />
      </Section>
    </Wrapper>
  );
};

export default MoreDetails;
