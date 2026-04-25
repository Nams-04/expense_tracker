import { useState } from "react";
import axios from "axios";

function AddTransaction({ fetchData }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/transactions", {
      text,
      amount: Number(amount),
      category
    });

    setText("");
    setAmount("");
    setCategory("");
    fetchData();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        placeholder="Amount (+income, -expense)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      {/* 👇 Category Dropdown */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
      </select>

      <button>Add Transaction</button>
    </form>
  );
}

export default AddTransaction;