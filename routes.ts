import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  addBook,
  getBook,
  getBooks,
  updateBook,
  deleteBook,
} from "./controllers/book.ts";

const router = new Router();

router
  .get("/api/books", getBooks)
  .get("/api/books/:id", getBook)
  .post("/api/books", addBook)
  .put("/api/books/:id", updateBook)
  .delete("/api/books/:id", deleteBook);

export default router;
