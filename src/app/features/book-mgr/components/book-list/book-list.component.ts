import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookLoaned } from '../../actions/book-mgr.actions';
import { BookManagerItem } from '../../models';
import { BookManagerState } from '../../reducers';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() list: BookManagerItem[];
  constructor(private store: Store<BookManagerState>) { }

  ngOnInit() {
  }

  changeOnLoan(item: BookManagerItem) {
    this.store.dispatch(new BookLoaned(item.id, item.title, item.author, item.format, item.onLoan));
  }
}
