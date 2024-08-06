const mongoose = require("mongoose");
require("dotenv").config();
const Book = require("../../api/models/Book");
const books = require("../../data/book");

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    let allBooks = await Book.find();

    if (allBooks.length) {
      await Book.collection.drop();
    }
  })
  .catch((error) => console.log(error))
  .then(async () => {
    await Book.insertMany(books);
  })
  .catch((error) => console.log(error))
  .finally(() => mongoose.disconnect());
