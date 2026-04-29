const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ Middleware
app.use(cors({
  origin: "*", // for now (you can restrict later)
}));
app.use(express.json());

// ✅ Routes
app.use("/api/transactions", require("./routes/transactions"));
app.use("/api/auth", require("./routes/auth")); // 🔥 IMPORTANT (for login/register)

// ✅ Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ Use dynamic port for Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});