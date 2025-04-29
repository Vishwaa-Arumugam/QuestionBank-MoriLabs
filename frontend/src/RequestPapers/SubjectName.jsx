import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const Wrapper = styled.div`
  display: flex;
  align-items: left;
  border: 1px solid #ccc;
  border-radius: 35px;
  padding: 5px 5px;
  max-width: 550px;
  height: 55px;
  margin: 20px auto;
  background-color: #fff;
`;

const Section = styled.div`
  width: 100%;  // Occupies the full width now
  text-align: left;
  height: 100%;
  
  span {
    // margin-top: 1px;
    margin-left:10px;
    display: block;
    font-weight: bold;
    font-size: 13px;
    color: #555;
  }

  .custom-select-container {
    font-size: 14px;
    color: #000;
    width: 100%;
  }

  .custom-select__control {
    border: none;
    // margin-left:10px
    background-color: transparent;
    box-shadow: none;
    padding-left: 10px;
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

const SubjectName = () => {
  const [subject, setSubject] = useState(null);

  const subjectOptions = [
    { value: 'UIT2601', label: 'Web Programming' },
    { value: 'UIT2602 ', label: ' Internet Of Things And C Programming' },
  ];

  const handleSelectChange = (selectedOption) => {
    setSubject(selectedOption ? selectedOption.value : null);
  };

  return (
    <Wrapper>
      <Section>
        <span>Enter Subject Name (If missing, if exists leave blank) </span>
        <Select
          classNamePrefix="custom-select"
          className="custom-select-container"
          options={subjectOptions}
          value={subjectOptions.find(option => option.value === subject)}
          onChange={handleSelectChange}
        />
      </Section>
    </Wrapper>
  );
};

export default SubjectName;
