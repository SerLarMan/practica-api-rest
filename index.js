const express = require("express");
const { connectDB } = require("./src/utils/database");
const bookstoreRoutes = require("./src/api/routes/bookstore.routes");
const bookRoutes = require("./src/api/routes/book.routes");

// Database connection
connectDB();

// Server configuration
const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/bookstores", bookstoreRoutes);
app.use("/books", bookRoutes);

app.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.messaje || "Unexpected error");
});

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
