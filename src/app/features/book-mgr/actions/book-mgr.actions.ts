import { Action } from '@ngrx/store';
import { BookManagerEntity } from '../reducers/book-mgr.reducer';

let myId = 99;
export const ADD_BOOK = '[bookManagerFeature] add  book';
export class BookAdded implements Action {
  readonly type = ADD_BOOK;
  payload: BookManagerEntity;
  constructor(title: string, author: string, format: string, onLoan: boolean) {
    this.payload = {
      title,
      author,
      format,
      onLoan,
      id: 'T' + (myId++)
    };
   }
}

export const LOAN_BOOK = '[bookManagerFeature] loan  book';
export class BookLoaned implements Action {
  readonly type = LOAN_BOOK;
  payload: BookManagerEntity;
  constructor(id: string, title: string, author: string, format: string, onLoan: boolean) {
    this.payload = {
      title,
      author,
      format,
      onLoan,
      id
    };
   }
}

export const RETURN_BOOK = '[bookManagerFeature] return  book';
export class BookReturned implements Action {
  readonly type = RETURN_BOOK;
  payload: BookManagerEntity;
  constructor(id: string, title: string, author: string, format: string, onLoan: boolean) {
    this.payload = {
      title,
      author,
      format,
      onLoan,
      id
    };
   }
}

// Discriminated Union Type  http://www.typescriptlang.org/docs/handbook/advanced-types.html
export type All = BookAdded | BookLoaned | BookReturned;
