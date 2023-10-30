const express = require("express");
const router = express.Router();
const Book = require('../Schema/Bookschema.jsx');

// Add a new book (title, author, summary)
router.post("/books", async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    const book = new Book({ title, author, summary });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// View a list of all books
router.get("/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// View details of a specific book by its ID
router.get("/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a book's details
router.put("/books/:id", async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    const book = await Book.findByIdAndUpdate(req.params.id, { title, author, summary }, { new: true });
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a book
router.delete("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(204).json(); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
