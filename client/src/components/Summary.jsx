function Summary({ transactions }) {
    const income = transactions
      .filter(t => t.amount > 0)
      .reduce((acc, t) => acc + t.amount, 0);
  
    const expense = transactions
      .filter(t => t.amount < 0)
      .reduce((acc, t) => acc + t.amount, 0);
  
      return (
        <div className="summary">
          <div className="income-box">
            Income <br /> ${income}
          </div>
          <div className="expense-box">
            Expense <br /> ${Math.abs(expense)}
          </div>
        </div>
      );
  }
  
  export default Summary;