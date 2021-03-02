import React from 'react';
import './Budget.css';

const Budget = (props) => {
    const budget = props.budget;
    const totalBudget = budget.reduce((total, playerBudget) => total + playerBudget.salary, 0);
    return (
        <div className="total-budget">
            <h2>Players Budget </h2>
            <br/>
            <h4>Total Players: {budget.length}</h4>
            <br/>
            <ul className="name-budget">
                {
                    budget.map(player => <li>
                        {player.name } : ${player.salary}</li>)
                }
            </ul>
            <h3>Total Budget: ${totalBudget}</h3>
        </div>
    );
};

export default Budget;