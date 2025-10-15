import { useState } from "react";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseForm from "./components/ExpenseForm";
import SearchBar from "./components/SearchBar";
import "./index.css";


function App(){
  const [expenses, setExpense] = useState([
    {id: 1, description: "KPLC bill", category: "tokens", amount: 1500, date: "28/11/2025"},
    {id: 2, description: "water bill", category: "units", amount: 600, date:"29/11/2025"},
  ]);
  
  const [search, setSearch] = useState("");

  const handleNewExpense = (newExpense)=>{
    setExpense([...expenses, {...newExpense, id: expenses.length + 1}]);
  };

  const handleDelete = (id)=>{
    setExpense(expenses.filter((expense)=>expense.id !==id))
  };

  const searchExpense = expenses.filter(
    (expense)=>
      expense.description.includes(search)||
    expense.category.includes(search)
  );
  
 return (
    <div className="app-container">
      <h1 className="app-title">Expense Tracker</h1>
      <p>Start taking contol of your finances and life, Record,<br></br> categorize and analyze your spending</p>
      <div className="search-section">
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      <div className="main-content">
        <ExpenseForm onAddExpense={handleNewExpense} />
        <ExpenseTable expenses={searchExpense} onDelete={handleDelete}/>
      </div>
    </div>
  );
}

export default App;