import { useEffect, useState } from "react";
import axios from "axios";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import Balance from "./components/Balance";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/transactions");
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <Balance transactions={transactions} />
      <AddTransaction fetchData={fetchData} />
      <TransactionList transactions={transactions} fetchData={fetchData} />
    </div>
  );
  
}

export default App;