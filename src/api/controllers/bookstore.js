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
    const bookStore = await BookStore.findById(id).populate("books");
    return res.status(200).json(bookStore);
  } catch (error) {
    return next(error);
  }
};

const addBookStore = async (req, res) => {
  try {
    const newBookStore = new BookStore(req.body);
    const bookStoreSaved = await newBookStore.save();
    return res.status(201).json(bookStoreSaved);
  } catch (error) {
    return next(error);
  }
};

const updateBookStoe = async (req, res) => {
  try {
    const { id } = req.params;
    const newBookStore = new BookStore(req.body);
    newBookStore._id = id;
    const updatedBookStore = await BookStore.findByIdAndUpdate(
      id,
      newBookStore,
      {
        new: true,
      }
    );
    return res.status(200).json(updatedBookStore);
  } catch (error) {
    return next(error)
  }
};

const deleteBookStore = async (req, res) => {
  try {
    const { id } = req.params;
    await BookStore.findByIdAndDelete(id);
    return res.status(200).json("Bookstore deleted");
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getBookStores,
  getBookStoresById,
  addBookStore,
  updateBookStoe,
  deleteBookStore,
};
