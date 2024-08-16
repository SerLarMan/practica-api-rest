const {
  getBookStores,
  getBookStoresById,
  addBookStore,
  updateBookStore,
  deleteBookStore,
} = require("../controllers/bookstore");

const bookstoreRouter = require("express").Router();

bookstoreRouter.get("/", getBookStores);
bookstoreRouter.get("/:id", getBookStoresById);
bookstoreRouter.post("/", addBookStore);
bookstoreRouter.put("/:id", updateBookStore);
bookstoreRouter.delete("/:id", deleteBookStore);

module.exports = bookstoreRouter;
