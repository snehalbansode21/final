import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFoodTypeComponent } from './delete-food-type.component';

describe('DeleteFoodTypeComponent', () => {
  let component: DeleteFoodTypeComponent;
  let fixture: ComponentFixture<DeleteFoodTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFoodTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFoodTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
