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

const QPDetails = () => {
  const [year, setYear] = useState(null);
  const [semester, setSemester] = useState(null);
  const [department, setDepartment] = useState(null);

  const yearOptions = [
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
 
  ];

  const semesterOptions = [
    { value: 'First', label: 'First' },
    { value: 'Second', label: 'Second' },
    { value: 'Third', label: 'Third' },

  ];

  const departmentOptions = [
    { value: 'Information Technology', label: 'Information Technology' },
    { value: 'Computer Science', label: 'Computer Science' },
    { value: 'Electronics and Communication', label: 'Electronics and Communication' },
    // Add more options as needed
  ];

  const handleSelectChange = (type, selectedOption) => {
    switch (type) {
      case 'year':
        setYear(selectedOption ? selectedOption.value : null);
        break;
      case 'semester':
        setSemester(selectedOption ? selectedOption.value : null);
        break;
      case 'department':
        setDepartment(selectedOption ? selectedOption.value : null);
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper>
      <Section>
        <span>Year of QP</span>
        <Select
          classNamePrefix="custom-select"
          className="custom-select-container"
          options={yearOptions}
          value={yearOptions.find(option => option.value === year)}
          onChange={(selectedOption) => handleSelectChange('year', selectedOption)}
        />
      </Section>
      <Section>
        <span>Semester</span>
        <Select
          classNamePrefix="custom-select"
          className="custom-select-container"
          options={semesterOptions}
          value={semesterOptions.find(option => option.value === semester)}
          onChange={(selectedOption) => handleSelectChange('semester', selectedOption)}
        />
      </Section>
      <Section>
        <span>Department</span>
        <Select
          classNamePrefix="custom-select"
          className="custom-select-container"
          options={departmentOptions}
          value={departmentOptions.find(option => option.value === department)}
          onChange={(selectedOption) => handleSelectChange('department', selectedOption)}
        />
      </Section>
    </Wrapper>
  );
};

export default QPDetails;
