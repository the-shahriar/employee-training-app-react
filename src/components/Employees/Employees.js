import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import './Employees.css'

const Employees = () => {
    const [employees, setEmployees] = useState([]);

    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('./Employees.json')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, [])

    const handleAddToTraining = (employee) => {
        const newList = [...list, employee];
        setList(newList);
    }

    return (
        <div className="container">
            <div className="employees">
                {
                    employees.map(employee => <Employee
                        key={employee.id}
                        employee={employee}
                        handleAddToTraining={handleAddToTraining}
                    ></Employee>)
                }

            </div>
            <div className="side-info">
                <h3>My Cart</h3>
            </div>

        </div>
    );
};

export default Employees;