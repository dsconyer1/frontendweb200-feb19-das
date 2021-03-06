import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as actions from '../actions/book-mgr.actions';
@Injectable()
export class BookLoanManagerEffects {

    @Effect({ dispatch: false }) updateTheApi$ = this.actions$
    .pipe(
      ofType(actions.LOAN_BOOK),
      map(a => a as actions.BookLoaned),
      switchMap(action => this.http.post('http://localhost:3000/onLoan', action.payload)

      )

    );

  constructor(private actions$: Actions, private http: HttpClient) {

  }
}
