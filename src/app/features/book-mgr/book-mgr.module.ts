import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BookMgrComponent } from './book-mgr.component';
import { BookEntryComponent } from './components/book-entry/book-entry.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookOnLoanComponent } from './components/book-on-loan/book-on-loan.component';
import { BookLoanManagerEffects } from './effects/book-loan.effects';
import { BookManagerEffects } from './effects/book-mgr.effects';
import { reducers } from './reducers';

@NgModule({
  declarations: [BookMgrComponent, BookEntryComponent, BookListComponent, BookOnLoanComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('bookManagerFeature', reducers),
    EffectsModule.forFeature([BookManagerEffects, BookLoanManagerEffects]),
    HttpClientModule,
    FormsModule
  ],
  exports: [BookMgrComponent]
})
export class BookMgrModule { }
