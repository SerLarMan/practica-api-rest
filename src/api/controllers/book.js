const Book = require("../models/Book");

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (error) {
    return next(error);
  }
};

const getBooksById = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    return next(error);
  }
};

const addBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const bookSaved = await newBook.save();
    return res.status(201).json(bookSaved);
  } catch (error) {
    return next(error);
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const newBook = new Book(req.body);
    newBook._id = id;
    const updatedBook = await Book.findByIdAndUpdate(id, newBook, {
      new: true,
    });
    return res.status(200).json(updatedBook);
  } catch (error) {
    return next(error);
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    return res.status(200).json("Book deleted");
  } catch (error) {
    return next(error);
  }
};

module.exports = { getBooks, getBooksById, addBook, updateBook, deleteBook };
