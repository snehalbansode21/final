import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddrofmgrComponent } from './add-addrofmgr.component';

describe('AddAddrofmgrComponent', () => {
  let component: AddAddrofmgrComponent;
  let fixture: ComponentFixture<AddAddrofmgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAddrofmgrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAddrofmgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
