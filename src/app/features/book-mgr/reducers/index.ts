import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookManagerItem } from '../models';
import * as fromBookLoanManager from './book-loan.reducer';
import * as fromBookManager from './book-mgr.reducer';

export interface BookManagerState {
  books: fromBookManager.State;
  onLoan: fromBookLoanManager.State;
}

export const reducers = {
  books: fromBookManager.reducer,
  onLoan: fromBookLoanManager.reducer
};

// 1. Create a Feature Selector
const selectBookManagerFeature = createFeatureSelector<BookManagerState>('bookManagerFeature');
// 2. Create a Selector for Each Branch of the Feature
const selectBooks = createSelector(selectBookManagerFeature, f => f.books);
const selectOnLoan = createSelector(selectBookManagerFeature, f => f.onLoan);
// 3. Create any "helpers" you might need (optional)
const { selectAll: selectBookManagerEntityArray } = fromBookManager.adapter.getSelectors(selectBooks);
const { selectAll: selectBookLoanManagerEntityArray } = fromBookLoanManager.adapter.getSelectors(selectOnLoan);
// 4. Create a selector for waht the component needs.

// TodoEntity[] => TodoListItem[]
export const selectBookManagerItems = createSelector(selectBookManagerEntityArray, t => t.map(x => x as BookManagerItem));
export const selectBookManagerOnLoanItems =
    createSelector(selectBookLoanManagerEntityArray, t => t.map(x => x as BookManagerItem));
