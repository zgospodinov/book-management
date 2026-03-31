import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";



export const AddBook = createAction(
  "[Books] Add Book",
  props<Book>()
);

export const RemoveBook = createAction(
  "[Books] Remove Book",
  props<{ bookId: string }>()
);
