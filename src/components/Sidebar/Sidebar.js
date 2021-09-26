import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    const { list } = props;
    let addedEmployee = 0;
    let totalCost = 0;
    let names = [];

    for (const employee of list) {

        employee.quantity = !employee.quantity ? 1 : employee.quantity;
        totalCost = (totalCost + employee.costPerHead);
        addedEmployee = addedEmployee + employee.quantity;
        if (!names.includes(employee.name)) {
            names.push(employee.name);
        }

    }
    return (
        <div className="side-info">
            <h3>Participants: {addedEmployee}</h3>
            <div className="added-person">
                {
                    names.map(name => <h4 className="person-name"
                        key={name}
                    >{name}</h4>)
                }
            </div>
            <h2>Total Allowance Cost : ${totalCost.toFixed(2)}</h2>
            <hr />

        </div>
    );
};

export default Sidebar;