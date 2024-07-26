const BookStore = require("../models/BookStore");

const getBookStores = async (req, res) => {
  try {
    const bookStores = await BookStore.find();
    return res.status(200).json(bookStores);
  } catch (error) {
    return next(error);
  }
};

const getBookStoresById = async (req, res) => {
  const { id } = req.params;

  try {
    const bookStore = BookStore.findById(id).populate("books");
    return res.status(200).json(bookStore);
  } catch (error) {
    return next(error);
  }
};

const addBookStore = async (req, res) => {
  try {
    const newBookStore = new BookStore(req.body);
    const bookStoreSaved = newBookStore.save();
    return res.status(201).json(bookStoreSaved);
  } catch (error) {
    return next(error);
  }
};

module.exports = { getBookStores, getBookStoresById, addBookStore };