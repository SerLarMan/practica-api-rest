const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    name: { type: String, require: true },
    isbn: { type: Number, require: true },
    publication_date: { type: Date },
    author: {
      first_name: { type: String, require: true },
      last_name: { type: String, require: true },
    },
    publisher: { type: String, require: true },
    pages: { type: Number },
    copies: { type: Number },
    price: { type: Number, require: true },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
