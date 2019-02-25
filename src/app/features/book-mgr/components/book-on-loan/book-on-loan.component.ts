import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookReturned } from '../../actions/book-mgr.actions';
import { BookManagerItem } from '../../models';
import { BookManagerState } from '../../reducers';

@Component({
  selector: 'app-book-on-loan',
  templateUrl: './book-on-loan.component.html',
  styleUrls: ['./book-on-loan.component.css']
})
export class BookOnLoanComponent implements OnInit {

  @Input() onLoanlist: BookManagerItem[];
  constructor(private store: Store<BookManagerState>) { }

  ngOnInit() {
  }

  returned(item: BookManagerItem) {
    this.store.dispatch(new BookReturned(item.id, item.title, item.author, item.format, item.onLoan));
  }
}
