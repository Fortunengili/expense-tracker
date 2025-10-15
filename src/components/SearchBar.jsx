import React from "react";
import ExpenseForm from "./ExpenseForm";

function SearchBar({search, setSearch}){
    return(
        <input
        className="search-input"
        type="text"
        placeholder="🔍Search Expense"
        value={search}
        onChange={(expense)=>setSearch(expense.target.value)}
        />
    );
}

export default SearchBar