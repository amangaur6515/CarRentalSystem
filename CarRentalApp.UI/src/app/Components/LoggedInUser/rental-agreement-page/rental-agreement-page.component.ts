import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarCrudService } from 'src/app/Services/car-crud.service';
import { CarRentService } from 'src/app/Services/car-rent.service';

@Component({
  selector: 'app-rental-agreement-page',
  templateUrl: './rental-agreement-page.component.html',
  styleUrls: ['./rental-agreement-page.component.css']
})
export class RentalAgreementPageComponent {
  rentalAgreement:any;
  
  car:any;
  constructor(private _carRentService:CarRentService,private _carCrudService:CarCrudService,private route:Router,private toastr:ToastrService){
    this.getRentalAgreement();
  }

  getRentalAgreement(){
    this.rentalAgreement=this._carRentService.getRentalAgreement();
    //get the car also to display details on page
    
    this._carCrudService.getCarById(this.rentalAgreement.carId).subscribe(res=>{
      this.car=res;
      
    });
    
    console.log(this.rentalAgreement)
  }


  edit(){
    this.route.navigate(['/user-home/rent-car'])
  }

  accept(){
    this._carRentService.acceptRentalAgreement(this.rentalAgreement).subscribe((res:any)=>{
      console.log(res);
      this.toastr.success("Agreement Completed","Car Rental App");
      this.route.navigate(['/user-home'])
    })
  }


}
