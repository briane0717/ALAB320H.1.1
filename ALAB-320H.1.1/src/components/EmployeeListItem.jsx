import React from "react";

function EmployeeListItem({ name, title }) {
  return (
    <div className="employee-list-item">
      <div>
        <div className="name">{name}</div>
        <div className="title">{title}</div>
        <br />
      </div>
    </div>
  );
}

export default EmployeeListItem;
