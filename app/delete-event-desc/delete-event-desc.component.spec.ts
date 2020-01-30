import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEventDescComponent } from './delete-event-desc.component';

describe('DeleteEventDescComponent', () => {
  let component: DeleteEventDescComponent;
  let fixture: ComponentFixture<DeleteEventDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEventDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEventDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
