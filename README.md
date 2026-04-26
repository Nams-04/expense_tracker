# 💰 Expense Tracker (MERN)

A simple full-stack Expense Tracker built using the MERN stack.
This application allows users to add, view, and delete transactions while tracking their balance.

---

## 🚀 Features

* Add income and expense transactions
* Delete transactions
* View current balance
* Income vs Expense summary
* Category-based filtering
* Date display for each transaction

---

## 🛠️ Tech Stack

* Frontend: React (Vite)
* Backend: Node.js, Express
* Database: MongoDB Atlas

---

## 📁 Project Structure

expense-tracker/
├── client/   # React frontend
├── server/   # Node + Express backend

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/expense-tracker.git
cd expense-tracker
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

```env
MONGO_URI=your_mongodb_connection_string
```

Run backend:

```bash
npx nodemon server.js
```

---

### 3️⃣ Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🌐 API Endpoints

| Method | Endpoint              | Description          |
| ------ | --------------------- | -------------------- |
| GET    | /api/transactions     | Get all transactions |
| POST   | /api/transactions     | Add new transaction  |
| DELETE | /api/transactions/:id | Delete transaction   |

---

## 📸 Screenshots

(Add your project screenshots here)

---

## 📌 Future Improvements

* Add charts for visualization
* User authentication
* Edit transactions
* Dark mode

---

## 👩‍💻 Author

Namratha Reddy
