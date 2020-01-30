import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertEventDescComponent } from './insert-event-desc.component';

describe('InsertEventDescComponent', () => {
  let component: InsertEventDescComponent;
  let fixture: ComponentFixture<InsertEventDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertEventDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertEventDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
