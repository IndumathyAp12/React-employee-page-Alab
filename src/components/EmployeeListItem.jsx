import React from 'react';

function EmployeeListItem  ({ employee })  {
  return (
    <div className="employee-list-item">
      <div className="employee-avatar"></div>
      <div className="employee-info">
        <h2>{employee.name}</h2>
        <p>{employee.title}</p>
      </div>
    </div>
  );
};

export default EmployeeListItem;
