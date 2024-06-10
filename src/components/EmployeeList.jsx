import React from 'react';
import EmployeeListItem from './EmployeeListItem';

function EmployeeList() {
  const employees = [
    { name: 'James King', title: 'President and CEO' },
    { name: 'Julie Taylor', title: 'VP of Marketing' },
    { name: 'Eugene Lee', title: 'CFO' },
    { name: 'John Williams', title: 'VP of Engineering' },
    { name: 'Ray Moore', title: 'VP of Sales' },
    { name: 'Paul Jones', title: 'QA Manager' },
  ];

  return (
    <div className="employee-list">
      {employees.map((employee, index) => (
        <EmployeeListItem key={index} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeeList;
