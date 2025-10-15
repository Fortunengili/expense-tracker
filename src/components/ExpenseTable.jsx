import React from "react";
function ExpenseTable({ expenses, onDelete }) {
    return (
        <><div className="expense-table-container" />
        <table className="expense-table">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount (KES)</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {expenses.length > 0 ? (
                    expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td>{expense.description}</td>
                            <td>{expense.category}</td>
                            <td>{expense.amount}</td>
                            <td>{expense.date}</td>
                            <td>
                                <button className="delete-btn" onClick={() => onDelete(expense.id)}>X</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">No expense Found</td>
                    </tr>
                )}
            </tbody>

        </table>
        </>
            )
}
export default ExpenseTable;