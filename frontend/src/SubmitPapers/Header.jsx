import React, { useState } from 'react';
import Select from 'react-select';

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
    <div className="flex gap-4 justify-start items-center border mt-10 border-gray-300 rounded-3xl px-6 py-4 max-w-4xl mx-auto bg-white shadow-lg">
      <div className="text-left w-1/4 h-full pr-4 mr-4 border-r-2 border-gray-300">
        <span className="block text-md font-semibold text-gray-700 mb-2">Year of QP</span>
        <Select
          classNamePrefix="custom-select"
          className="w-full font-medium text-black border-2 border-gray-300 rounded-lg"
          options={yearOptions}
          value={yearOptions.find(option => option.value === year)}
          onChange={(selectedOption) => handleSelectChange('year', selectedOption)}
        />
      </div>

      <div className="text-left w-1/4 h-full pr-4 mr-4 border-r-2 border-gray-300">
        <span className="block text-md font-semibold text-gray-700 mb-2">Semester</span>
        <Select
          classNamePrefix="custom-select"
          className="w-full font-medium text-black border-2 border-gray-300 rounded-lg"
          options={semesterOptions}
          value={semesterOptions.find(option => option.value === semester)}
          onChange={(selectedOption) => handleSelectChange('semester', selectedOption)}
        />
      </div>

      <div className="text-left w-2/5 h-full">
        <span className="block text-md font-semibold text-gray-700 mb-2">Department</span>
        <Select
          classNamePrefix="custom-select"
          className="w-full font-medium text-black border-2 border-gray-300 rounded-lg"
          options={departmentOptions}
          value={departmentOptions.find(option => option.value === department)}
          onChange={(selectedOption) => handleSelectChange('department', selectedOption)}
        />
      </div>
    </div>
  );
};

export default QPDetails;
