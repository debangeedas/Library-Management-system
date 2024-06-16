import express from "express";
import connectToDB from "./db/connectToDB.js";

import checkRoutes from "./routes/checkRoutes.js";
import myBooksRoutes from "./routes/userRoutes/myBooks/myBooksRoutes.js";
import booksRoutes from "./routes/userRoutes/books/booksRoutes.js";
import profileRouter from "./routes/profileRoutes/profile.js";
const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/developer", checkRoutes);

app.use("/api/user/myBooks", myBooksRoutes);
app.use("/api/user/book/browse", booksRoutes);
app.use("/api/user/profile", profileRouter);
//user/book/browse

app.listen(PORT, () => {
  connectToDB();
  console.log(`Server listening on port http://localhost:${PORT}`);
});
