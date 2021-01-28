import { Body, Request, Response } from 'https://deno.land/x/oak/mod.ts';

import { Book } from '../models/book.ts';
import * as booksService from '../services/book.ts';

export const getBooks = ({ response }: { response: Response }): void => {
  response.body = {
    success: true,
    data: booksService.getBooks(),
  };
};

export const getBook = ({
  params,
  response,
}: {
  params: { id: string };
  response: Response;
}): void => {
  const { id } = params;
  const data: Book | undefined = booksService.getBook(id);
  const success = !!data;

  response.status = success ? 200 : 404;
  response.body = {
    success,
    ...(success ? { data } : { msg: `No book found with id: ${id}` }),
  };
};

export const addBook = async ({
  request,
  response,
}: {
  request: Request;
  response: Response;
}): Promise<void> => {
  const body: Body = await request.body();
  const { hasBody: success } = request;

  success && booksService.addBook((body.value as unknown) as Book);

  response.status = success ? 201 : 400;
  response.body = {
    success,
    message: success ? 'New book added' : 'No data',
  };
};

export const updateBook = async ({
  params,
  request,
  response,
}: {
  params: { id: string };
  request: Request;
  response: Response;
}): Promise<void> => {
  const { id } = params;
  const body: Body = await request.body();
  const success: boolean = body.value
    ? !!booksService.updateBook(id, (body.value as unknown) as Book)
    : false;

  response.status = success ? 200 : 404;
  response.body = {
    success,
    message: success ? `Updated book with id: ${id}` : 'Book not found',
  };
};

export const deleteBook = ({
  params,
  response,
}: {
  params: { id: string };
  response: Response;
}): void => {
  const { id } = params;

  booksService.deleteBook(id);

  response.body = {
    success: true,
    message: `Deleted book with id: ${id}`,
  };
};
