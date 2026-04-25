import { useEffect, useState } from "react";
import axios from "axios";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import Balance from "./components/Balance";
import "./App.css";
import Summary from "./components/Summary";
function App() {
  const [transactions, setTransactions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/transactions");
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredTransactions =
    selectedCategory === "All"
      ? transactions
      : transactions.filter(t => t.category === selectedCategory);

      return (
        <div className="container">
          <h1>Expense Tracker</h1>
      
          <Balance transactions={transactions} />
          <Summary transactions={transactions} />
      
          {/* FORM */}
          <div style={{ marginTop: "20px" }}>
            <AddTransaction fetchData={fetchData} />
          </div>
      
          {/* FILTER */}
          <div style={{ marginTop: "20px" }}>
            <label style={{ fontWeight: "bold" }}>
              Filter by Category
            </label>
      
            <select
              style={{ width: "100%", marginTop: "8px" }}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Shopping">Shopping</option>
              <option value="Bills">Bills</option>
            </select>
          </div>
      
          {/* LIST */}
          <TransactionList
            transactions={filteredTransactions}
            fetchData={fetchData}
          />
        </div>
      );
}

export default App;