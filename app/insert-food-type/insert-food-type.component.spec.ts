import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertFoodTypeComponent } from './insert-food-type.component';

describe('InsertFoodTypeComponent', () => {
  let component: InsertFoodTypeComponent;
  let fixture: ComponentFixture<InsertFoodTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertFoodTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertFoodTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
