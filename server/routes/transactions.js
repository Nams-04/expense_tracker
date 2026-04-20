const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");


// GET all transactions
router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ADD transaction
router.post("/", async (req, res) => {
  try {
    const { text, amount, category } = req.body;

    const newTransaction = new Transaction({
      text,
      amount,
      category
    });

    const saved = await newTransaction.save();
    res.status(201).json(saved);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// DELETE transaction
router.delete("/:id", async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: "Transaction deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;