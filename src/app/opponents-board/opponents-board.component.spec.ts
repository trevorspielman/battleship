import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpponentsBoardComponent } from './opponents-board.component';

describe('OpponentsBoardComponent', () => {
  let component: OpponentsBoardComponent;
  let fixture: ComponentFixture<OpponentsBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpponentsBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpponentsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
