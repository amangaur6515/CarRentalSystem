import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCarsComponent } from './Components/Admin/all-cars/all-cars.component';
import { EditCarComponent } from './Components/Admin/edit-car/edit-car.component';
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
import { authGuard } from './Guards/auth.guard';
import { adminGuard } from './Guards/admin.guard';
import { PageNotFoundComponent } from './Components/AnonymousUser/page-not-found/page-not-found.component';
import { SignupComponent } from './Components/AnonymousUser/signup/signup.component';
import { CarInspectionsComponent } from './Components/Admin/car-inspections/car-inspections.component';

const routes: Routes = [
  //anonymous user
  {path:'',component:HomePageComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},

  //admin user
  {path:'cars',component:AllCarsComponent,canActivate:[adminGuard]},
  {path:'cars/edit',component:EditCarComponent,canActivate:[adminGuard]},
  {path:'cars/add',component:AddCarComponent,canActivate:[adminGuard]},
  {path:'rental-agreements',component:RentalAgreementsPageComponent,canActivate:[adminGuard]},
  {path:'car-inspections',component:CarInspectionsComponent,canActivate:[adminGuard]},
  {path:'update-rental-agreement/:id', component: UpdateRentalAgreementComponent,canActivate:[adminGuard] },
 
  //regular user
  {path:'user-home',component:HomeComponent,canActivate:[authGuard]},
  {path:'user-home/rent-car',component:RentCarComponent,canActivate:[authGuard]},
  {path:'user-home/rent-car/rental-agreement',component:RentalAgreementPageComponent,canActivate:[authGuard]},
  {path:'user-rental-agreements',component:MyRentalAgreementComponent,canActivate:[authGuard]},
  {path:'return-request',component:ReturnRequestPageComponent,canActivate:[authGuard]},

  //404
  {path:'**',component:PageNotFoundComponent}
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
