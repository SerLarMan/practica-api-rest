const BookStore = require("../models/BookStore");

const getBookStores = async (req, res, next) => {
  try {
    const bookStores = await BookStore.find();
    return res.status(200).json(bookStores);
  } catch (error) {
    return next(error);
  }
};

const getBookStoresById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const bookStore = await BookStore.findById(id).populate("books");
    return res.status(200).json(bookStore);
  } catch (error) {
    return next(error);
  }
};

const addBookStore = async (req, res, next) => {
  try {
    const newBookStore = new BookStore(req.body);
    const bookStoreSaved = await newBookStore.save();
    return res.status(201).json(bookStoreSaved);
  } catch (error) {
    return next(error);
  }
};

const updateBookStore = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bookStore = await BookStore.findById(id).populate("books");
    const newBookStore = new BookStore(req.body);
    newBookStore._id = id;

    // Se comprueba que no se repitan los libros
    bookStore.books.forEach((book) => {
      if (!newBookStore.books.includes(book._id)) {
        newBookStore.books.push(book);
      }
    });

    const updatedBookStore = await BookStore.findByIdAndUpdate(
      id,
      newBookStore,
      {
        new: true,
      }
    );
    return res.status(200).json(updatedBookStore);
  } catch (error) {
    return next(error);
  }
};

const deleteBookStore = async (req, res, next) => {
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
  updateBookStore,
  deleteBookStore,
};
