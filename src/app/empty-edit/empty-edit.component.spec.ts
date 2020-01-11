import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyEditComponent } from './empty-edit.component';

describe('EmptyEditComponent', () => {
  let component: EmptyEditComponent;
  let fixture: ComponentFixture<EmptyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
