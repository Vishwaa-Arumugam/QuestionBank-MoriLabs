import React, { useState } from 'react';
import Select from 'react-select';

const SubjectName = () => {
  const [subject, setSubject] = useState(null);

  const subjectOptions = [
    { value: 'UIT2601', label: 'Web Programming' },
    { value: 'UIT2602', label: 'Internet Of Things And C Programming' },
  ];

  const handleSelectChange = (selectedOption) => {
    setSubject(selectedOption ? selectedOption.value : null);
  };

  return (
    <>
      <div className="flex justify-center items-center border mb-8 border-gray-300 rounded-3xl p-5 max-w-lg mx-auto bg-white shadow-md mt-8">
        <div className="w-full text-left">
          <span className="block text-sm font-semibold text-gray-600 mb-2">
            Enter Subject Name (If missing, if exists leave blank)
          </span>
          <Select
            className="w-full"
            classNamePrefix="custom-select"
            options={subjectOptions}
            value={subjectOptions.find(option => option.value === subject)}
            onChange={handleSelectChange}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: 'white',
                borderColor: state.isFocused ? '#3b82f6' : '#d1d5db', // focus blue-500
                boxShadow: state.isFocused ? '0 0 0 2px rgba(59, 130, 246, 0.5)' : 'none',
                borderRadius: '0.5rem',
                padding: '4px 6px',
                minHeight: '42px',
              }),
              menu: (base) => ({
                ...base,
                borderRadius: '0.5rem',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                marginTop: 4,
              }),
              option: (base, { isFocused }) => ({
                ...base,
                backgroundColor: isFocused ? '#eff6ff' : 'white',
                color: '#111827',
                fontSize: '14px',
                padding: '10px',
              }),
              valueContainer: (base) => ({
                ...base,
                padding: '0 8px',
              }),
              input: (base) => ({
                ...base,
                margin: 0,
                padding: 0,
              }),
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SubjectName;
