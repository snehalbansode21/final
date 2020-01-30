import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMgrComponent } from './edit-mgr.component';

describe('EditMgrComponent', () => {
  let component: EditMgrComponent;
  let fixture: ComponentFixture<EditMgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMgrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
