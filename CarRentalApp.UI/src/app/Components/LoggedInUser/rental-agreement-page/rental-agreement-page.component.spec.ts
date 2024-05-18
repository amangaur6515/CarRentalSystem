import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalAgreementPageComponent } from './rental-agreement-page.component';

describe('RentalAgreementPageComponent', () => {
  let component: RentalAgreementPageComponent;
  let fixture: ComponentFixture<RentalAgreementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalAgreementPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalAgreementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
