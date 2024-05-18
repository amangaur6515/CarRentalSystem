import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarCrudService } from 'src/app/Services/car-crud.service';
import { CarRentService } from 'src/app/Services/car-rent.service';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent {
  car:any;
  
  constructor(private _carCrudService:CarCrudService,private _carRentService:CarRentService,private route:Router){
    this.getCarById();
  }

  rentForm=new FormGroup({
    duration:new FormControl('',[Validators.required]),
  });

  get duration(){
    return this.rentForm.controls.duration;
  }

  onSubmit(){
    const duration:any=this.rentForm.value.duration;
    const currentDate=new Date();
    //create the obj
    const rentalAgreementObj={
      carId:this.car.id,
      userId:this.getUserName(),
      rentStartDate:currentDate.toLocaleDateString('en-GB'),
      duration:duration,
      totalCost:(duration*(+this.car.rentalPrice)).toString(),
      returnStatus:false
    }
    //console.log(rentalAgreementObj)
    this._carRentService.storeRentalAgreement(rentalAgreementObj);
    this.route.navigate(['user-home/rent-car/rental-agreement'])

  }
 
  getUserName(){
    return localStorage.getItem("username");
  }

  getCarById(){
    this._carCrudService.getCarById().subscribe((res:any)=>{
      console.log(res);
      this.car=res;
    })
  }


}
