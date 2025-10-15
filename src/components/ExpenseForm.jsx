import React, { useState } from "react";

function ExpenseForm({onAddExpense}){
    const [formData, setFormData] = useState({
        description: "",
        category: "",
        amount: "",
        date: ""
    });
    const handleChange =(expense)=>{
        setFormData({
            ...formData, [expense.target.name]: expense.target.value,
        });
    };
    const hanldeSubmit = (expense)=>{
        expense.preventDefault();
        if(!formData.description||!formData.category||!formData.amount||!formData.date){
            alert("All fields required!");
            return;
        }
        onAddExpense({
            description: formData.description,
            category: formData.category,
            amount: parseFloat(formData.amount),
            date: formData.date
        });
        setFormData({description:"", category:"", amount:"", date:""});
    };
    return(
        <form className="expense-form" onSubmit={hanldeSubmit}>
            <h2>Add Expense</h2>
            <h3>Enter your details below</h3>
            <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            />
            <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            />
            <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            />
            <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            />
            <button type="submit" className="add-btn">Submit</button>
        </form>
    );
}

export default ExpenseForm;