import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRentalAgreementComponent } from './update-rental-agreement.component';

describe('UpdateRentalAgreementComponent', () => {
  let component: UpdateRentalAgreementComponent;
  let fixture: ComponentFixture<UpdateRentalAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRentalAgreementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRentalAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
