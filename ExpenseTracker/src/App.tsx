import  { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ExpenseList from "./components/expenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
export const categories =["Groceries","Utilities","Entertainment"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Groceries" },
    { id: 2, description: "bbb", amount: 10, category: "Groceries" },
    { id: 3, description: "ccc", amount: 10, category: "Groceries" },
    { id: 4, description: "ddd", amount: 10, category: "Groceries" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const handleDeleteExpense = (id : number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  return (
    <div>
      <div className="mb-5">
     <ExpenseForm/>
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={setSelectedCategory} />
      </div>
      <div>
        <ExpenseList expenses={visibleExpenses} onDelete={handleDeleteExpense} />
      </div>
    </div>
  );
}

export default App;
