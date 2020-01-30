import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsTransactionDetailsComponent } from './clients-transaction-details.component';

describe('ClientsTransactionDetailsComponent', () => {
  let component: ClientsTransactionDetailsComponent;
  let fixture: ComponentFixture<ClientsTransactionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsTransactionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsTransactionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
