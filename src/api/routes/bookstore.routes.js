const {
  getBookStores,
  getBookStoresById,
  addBookStore,
} = require("../controllers/bookstore");

const bookstoreRouter = require("express").Router();

bookstoreRouter.get("/", getBookStores);
bookstoreRouter.get("/:id", getBookStoresById);
bookstoreRouter.post("/", addBookStore);

module.exports = bookstoreRouter;
