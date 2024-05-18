import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRentalAgreementComponent } from './my-rental-agreement.component';

describe('MyRentalAgreementComponent', () => {
  let component: MyRentalAgreementComponent;
  let fixture: ComponentFixture<MyRentalAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRentalAgreementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRentalAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
