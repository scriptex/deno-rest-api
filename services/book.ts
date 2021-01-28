import { v4 } from "https://deno.land/std/uuid/mod.ts";

import { Book } from "../models/book.ts";
import { books as mockedBooks } from "../mocks/books.ts";

const books: Book[] = mockedBooks;

export const getBook = (id: string): Book | undefined =>
  books.find((book) => book.id === id) || undefined;

export const getBooks = (): Book[] => books;

export const addBook = (newBook: Book): string => {
  const id = v4.generate();

  books.push({
    ...newBook,
    id,
  });

  return id;
};

export const updateBook = (id: string, data: Book): Book[] | undefined => {
  const book: Book | undefined = books.find((book) => book.id === id);

  return book
    ? books.map((book: Book) => (book.id === id ? { ...book, ...data } : book))
    : undefined;
};

export const deleteBook = (id: string): Book[] =>
  books.filter((book: Book) => book.id !== id);
