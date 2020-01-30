import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFoodSubMenuComponent } from './edit-food-sub-menu.component';

describe('EditFoodSubMenuComponent', () => {
  let component: EditFoodSubMenuComponent;
  let fixture: ComponentFixture<EditFoodSubMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFoodSubMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFoodSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
