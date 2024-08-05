const {
  getBookStores,
  getBookStoresById,
  addBookStore,
  deleteBookStore
} = require("../controllers/bookstore");

const bookstoreRouter = require("express").Router();

bookstoreRouter.get("/", getBookStores);
bookstoreRouter.get("/:id", getBookStoresById);
bookstoreRouter.post("/", addBookStore);
bookstoreRouter.delete("/:id", deleteBookStore);

module.exports = bookstoreRouter;
