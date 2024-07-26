const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookStoreSchema = new Schema(
  {
    name: { type: String, require: true },
    adress: { type: String, require: true },
    books: [{ type: mongoose.type.ObjectId, ref: "books" }],
  },
  {
    timestamps: true,
  }
);

const BookStore = mongoose.model("BookStore", bookStoreSchema);
module.exports = BookStore;
