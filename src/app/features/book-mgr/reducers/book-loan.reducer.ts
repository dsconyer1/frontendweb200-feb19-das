
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as actions from '../actions/book-mgr.actions';
export interface BookManagerEntity {
  id: string;
  title: string;
  author: string;
  format: string;
  onLoan: boolean;
}

export interface State extends EntityState<BookManagerEntity> { }

const initialState: State = {
  ids: ['4', '5'],
  entities: {
    4: { id: '4', title: 'Clean Garage 2', author: 'Jay Leno', format: 'Paperback', onLoan: true },
    5: { id: '5', title: 'Fix Downspout Again', author: 'Rain Day', format: 'Hardcover', onLoan: true }
  }
};

export const adapter = createEntityAdapter<BookManagerEntity>();

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.LOAN_BOOK: {
      return adapter.addOne(action.payload, state);
    }
    case actions.RETURN_BOOK: {
      return adapter.removeOne(action.payload.id, state);
    }
    default: {
      return state;
    }
  }
}
