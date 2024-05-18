import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalAgreementsPageComponent } from './rental-agreements-page.component';

describe('RentalAgreementsPageComponent', () => {
  let component: RentalAgreementsPageComponent;
  let fixture: ComponentFixture<RentalAgreementsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalAgreementsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalAgreementsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
