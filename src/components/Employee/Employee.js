import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';
import './Employee.css';

const Employee = (props) => {
    const { id, name, email, phone, department, image, costPerHead } = props.employee;
    const icon = <FontAwesomeIcon icon={faBriefcaseMedical} />
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
                <h5 className="cost">Allowance Amount: ${costPerHead}</h5>
                <button className="btn-add" onClick={() => props.handleAddToTraining(props.employee)}>{icon} Add To Training</button>
            </div>
        </div>
    );
};

export default Employee;