import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOnLoanComponent } from './book-on-loan.component';

describe('BookOnLoanComponent', () => {
  let component: BookOnLoanComponent;
  let fixture: ComponentFixture<BookOnLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookOnLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookOnLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
