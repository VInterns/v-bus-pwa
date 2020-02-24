import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBookComponent } from './to-book.component';

describe('ToBookComponent', () => {
  let component: ToBookComponent;
  let fixture: ComponentFixture<ToBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
