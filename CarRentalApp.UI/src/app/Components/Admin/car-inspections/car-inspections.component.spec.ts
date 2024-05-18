import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInspectionsComponent } from './car-inspections.component';

describe('CarInspectionsComponent', () => {
  let component: CarInspectionsComponent;
  let fixture: ComponentFixture<CarInspectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarInspectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarInspectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
