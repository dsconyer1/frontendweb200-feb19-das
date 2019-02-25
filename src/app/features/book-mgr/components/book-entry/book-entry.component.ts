import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookAdded } from '../../actions/book-mgr.actions';
import { BookManagerState } from '../../reducers';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent implements OnInit {

  myTitle = '';
  myAuthor = '';
  selectedBookFormat = '';
  myOnLoan = false;

bookForamts = [
    {value: 'Hardcover'},
    {value: 'Paperback'},
    {value: 'E-Book'}
  ];
constructor(private store: Store<BookManagerState>) { }

  ngOnInit() {
  }

  add(focusMe: HTMLInputElement) {
    this.store.dispatch(new BookAdded(this.myTitle, this.myAuthor, this.selectedBookFormat, this.myOnLoan));
    this.myTitle = '';
    this.myAuthor = '';
    this.selectedBookFormat = '';
    focusMe.focus();
  }

}
