const { getBooks, getBooksById, addBook } = require("../controllers/book");

const bookRouter = require("express").Router();

bookRouter.get("/", getBooks);
bookRouter.get("/:id", getBooksById);
bookRouter.post("/", addBook);

module.exports = bookRouter;
