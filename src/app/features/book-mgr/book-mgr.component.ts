import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookManagerItem } from './models';
import { BookManagerState, selectBookManagerItems, selectBookManagerOnLoanItems } from './reducers';


@Component({
  selector: 'app-book-mgr',
  templateUrl: './book-mgr.component.html',
  styleUrls: ['./book-mgr.component.css']
})
export class BookMgrComponent implements OnInit {

  books$: Observable<BookManagerItem[]>;
  onLoan$: Observable<BookManagerItem[]>;

  constructor(private store: Store<BookManagerState>) { }

  ngOnInit() {
    this.books$ = this.store.select(selectBookManagerItems);
    this.onLoan$ = this.store.select(selectBookManagerOnLoanItems);
  }

}
