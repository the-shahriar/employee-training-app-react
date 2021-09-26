import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    const { list } = props;
    let addedEmployee = 0;
    let totalCost = 0;

    for (const employee of list) {

        employee.quantity = !employee.quantity ? 1 : employee.quantity;
        totalCost = (totalCost + employee.costPerHead);
        addedEmployee = addedEmployee + employee.quantity;
    }
    return (
        <div className="side-info">
            <h3>Total Person Added: {addedEmployee}</h3>
            <h4>Total Cost : {totalCost.toFixed(2)}</h4>
        </div>
    );
};

export default Sidebar;