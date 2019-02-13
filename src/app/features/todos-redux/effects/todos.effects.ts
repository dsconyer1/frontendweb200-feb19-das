import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import * as actions from '../actions/todos.actions';

@Injectable()
export class TodosEffects {

  @Effect({ dispatch: false}) logThemAll$ = this.actions$
  .pipe(
    ofType(actions.ADD_TODO),
    map(a => a as actions.TodoAdded),
    tap(x => console.log(x))
  );

  constructor(private actions$: Actions) {

  }
}
