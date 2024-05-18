import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCarsComponent } from './Components/Admin/all-cars/all-cars.component';
import { EditCarComponent } from './Components/Admin/edit-car/edit-car.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AddCarComponent } from './Components/Admin/add-car/add-car.component';
import { LoginComponent } from './Components/AnonymousUser/login/login.component';
import { HomePageComponent } from './Components/AnonymousUser/home-page/home-page.component';
import { HomeComponent } from './Components/LoggedInUser/home/home.component';
import { RentCarComponent } from './Components/LoggedInUser/rent-car/rent-car.component';
import { RentalAgreementPageComponent } from './Components/LoggedInUser/rental-agreement-page/rental-agreement-page.component';
import { MyRentalAgreementComponent } from './Components/LoggedInUser/my-rental-agreement/my-rental-agreement.component';
import { ReturnRequestPageComponent } from './Components/LoggedInUser/return-request-page/return-request-page.component';
import { RentalAgreementsPageComponent } from './Components/Admin/rental-agreements-page/rental-agreements-page.component';
import { UpdateRentalAgreementComponent } from './Components/Admin/update-rental-agreement/update-rental-agreement.component';
import { PageNotFoundComponent } from './Components/AnonymousUser/page-not-found/page-not-found.component';
import { SignupComponent } from './Components/AnonymousUser/signup/signup.component';
import { CarInspectionsComponent } from './Components/Admin/car-inspections/car-inspections.component';
@NgModule({
  declarations: [
    AppComponent,
    AllCarsComponent,
    EditCarComponent,
    AddCarComponent,
    LoginComponent,
    HomePageComponent,
    HomeComponent,
    RentCarComponent,
    RentalAgreementPageComponent,
    MyRentalAgreementComponent,
    ReturnRequestPageComponent,
    RentalAgreementsPageComponent,
    UpdateRentalAgreementComponent,
    PageNotFoundComponent,
    SignupComponent,
    CarInspectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
