import axios from "axios";

function TransactionList({ transactions, fetchData }) {

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5000/api/transactions/${id}`);
    fetchData();
  };

  return (
    <ul className="list">
      {transactions.map((t) => (
        <li key={t._id} className={t.amount > 0 ? "income" : "expense"}>
  
        <div>
          <strong>{t.text}</strong>
          <br />
          <small style={{ color: "#777" }}>
            {new Date(t.date).toLocaleDateString()}
          </small>
        </div>
      
        <div style={{ textAlign: "right" }}>
          <div>${t.amount}</div>
          <button className="delete-btn" onClick={() => deleteItem(t._id)}>
            X
          </button>
        </div>
      
      </li>
      ))}
    </ul>
  );
}

export default TransactionList;