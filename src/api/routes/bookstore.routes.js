const {
  getBookStores,
  getBookStoresById,
  addBookStore,
  updateBookStoe,
  deleteBookStore,
} = require("../controllers/bookstore");

const bookstoreRouter = require("express").Router();

bookstoreRouter.get("/", getBookStores);
bookstoreRouter.get("/:id", getBookStoresById);
bookstoreRouter.post("/", addBookStore);
bookstoreRouter.put("/:id", updateBookStoe);
bookstoreRouter.delete("/:id", deleteBookStore);

module.exports = bookstoreRouter;
