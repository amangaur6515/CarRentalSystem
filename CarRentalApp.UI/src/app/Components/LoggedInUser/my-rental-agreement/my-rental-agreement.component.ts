import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarCrudService } from 'src/app/Services/car-crud.service';
import { CarRentService } from 'src/app/Services/car-rent.service';

@Component({
  selector: 'app-my-rental-agreement',
  templateUrl: './my-rental-agreement.component.html',
  styleUrls: ['./my-rental-agreement.component.css']
})
export class MyRentalAgreementComponent {
  
  userRentalAgreements:any=[];
  
  constructor(private _carRentService:CarRentService,private _carCrudService:CarCrudService,private route:Router){
    this.getUserRentalAgreements();

  }

  getUserRentalAgreements(){
    let username=localStorage.getItem("username");
    this._carRentService.getUserRentalAgreements(username).subscribe((res:any)=>{
      console.log(res)
      //userRentalAgreements will contain the carId we need to get maker and model 
      for(let agreement of res){
        //for each agreement obj call the api and get the car object
        this._carCrudService.getCarById(agreement.carId).subscribe((res:any)=>{
          let car=res;
          //in each agreement object add two more propeties
          agreement={...agreement,maker:car.maker,model:car.model}
          //add the obj to our array
          this.userRentalAgreements.push(agreement);
        })
      }
      
    })
  }

  returnRequest(agreementId:number){
    this._carRentService.storeRentalAgreementIdToBeReturned(agreementId);
    this.route.navigate(['/return-request'])
  }
  

}
