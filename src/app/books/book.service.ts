import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  addBook(book: Book): Observable<Book> {
    //TODO: Here you can implement the logic to add a book, for example, by making an HTTP request to a backend API.
    // const error = new Error('Failed to add book');
    // return throwError(() => error);
    return of(book);
  }

  removeBook(bookId: string): Observable<boolean> {
    //TODO: Here you can implement the logic to remove a book, for example, by making an HTTP request to a backend API.
    return of(true);
  }
}
