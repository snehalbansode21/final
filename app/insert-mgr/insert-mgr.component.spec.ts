import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertMgrComponent } from './insert-mgr.component';

describe('InsertMgrComponent', () => {
  let component: InsertMgrComponent;
  let fixture: ComponentFixture<InsertMgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertMgrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
