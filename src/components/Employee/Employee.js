import React from 'react';
import './Employee.css';

const Employee = (props) => {
    const { id, name, email, phone, department, image, costPerHead } = props.employee;
    return (
        <div className="employee">
            <div className="employee-image">
                <img src={image} alt="" />
            </div>
            <div className="employee-info">
                <p>Employee ID : {id}</p>
                <h3 className="name">Employee Name: {name}</h3>
                <h5 className="department">Department: {department}</h5>
                <h5 className="email">Email: {email}</h5>
                <h5 className="phone">Phone: {phone}</h5>
                <h5 className="cost">Cost Per Head: {costPerHead}</h5>
                <button className="btn-add" onClick={() => props.handleAddToTraining(props.employee)}>Add To Training</button>
            </div>
        </div>
    );
};

export default Employee;