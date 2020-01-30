import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventDescComponent } from './edit-event-desc.component';

describe('EditEventDescComponent', () => {
  let component: EditEventDescComponent;
  let fixture: ComponentFixture<EditEventDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEventDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEventDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
