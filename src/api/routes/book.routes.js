const {
  getBooks,
  getBooksById,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/book");

const bookRouter = require("express").Router();

bookRouter.get("/", getBooks);
bookRouter.get("/:id", getBooksById);
bookRouter.post("/", addBook);
bookRouter.put("/:id", updateBook);
bookRouter.delete("/:id", deleteBook);

module.exports = bookRouter;
