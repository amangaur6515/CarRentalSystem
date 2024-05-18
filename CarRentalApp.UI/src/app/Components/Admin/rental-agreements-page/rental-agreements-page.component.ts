import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarCrudService } from 'src/app/Services/car-crud.service';
import { CarRentService } from 'src/app/Services/car-rent.service';

@Component({
  selector: 'app-rental-agreements-page',
  templateUrl: './rental-agreements-page.component.html',
  styleUrls: ['./rental-agreements-page.component.css']
})

export class RentalAgreementsPageComponent {
  //array to store all rental agreements
  allRentalAgreements:any=[];
  //for button toggle
  returnAccepted=false;

  constructor(private _carRentService:CarRentService,private _carCrudService:CarCrudService,private toastr:ToastrService,private route:Router){
    this.getRentalAgreements();
  }

  getRentalAgreements(){
    //call the service method
    this._carRentService.getAllRentalAgreements().subscribe((res:any)=>{
      //RentalAgreements will contain the carId we need to get maker and model 
      for(let agreement of res){
        //for each agreement obj call the api and get the car object
        this._carCrudService.getCarById(agreement.carId).subscribe((res:any)=>{
          let car=res;
          //in each agreement object add two more propeties
          agreement={...agreement,maker:car.maker,model:car.model}
          //add the obj to our array
          this.allRentalAgreements.push(agreement);
        })
      }
      
      console.log(this.allRentalAgreements)

    })
  }


  deleteAgreement(agreementId:number,carId:number){
    //call the service
    this._carRentService.deleteRentalAgreement(agreementId).subscribe((res:any)=>{
      this.toastr.success("Success","Car Rental App");
      //when agreement is deleted, remove the car under inspection
      localStorage.removeItem(carId.toString());
      // Find the index of the agreement  in the agreements array
      const index = this.allRentalAgreements.findIndex((obj:any) => obj.id === agreementId);

      // If the agreement is found in the array, remove it
      if (index !== -1) {
        this.allRentalAgreements.splice(index, 1);
      }
    })
  }

  navigateToUpdate(rentalAgreementId:any){
    //update the rental agreement using useParams
    this.route.navigate(['/update-rental-agreement', rentalAgreementId]);
  }

  markForInspection(agreement:any){
    //create the obj
    const obj={
      rentalAgreementId:agreement.id,
      carId:agreement.carId,
      userId:agreement.userId,
      isCompleted:false
    }
    //call the service
    this._carRentService.markForInspection(obj).subscribe((res:any)=>{
      console.log(res);
      //inlocal storage store the carId to identify its under inspection to disable button
      localStorage.setItem(obj.carId,"true")
      //this._carRentService.storeMarkedForInspection(agreement.id);
      this.toastr.info("Marked For Inspection","Car Rental App");
    })
  }

  //to check if under inspection, and disable the button
  isUnderInspection(carId:number){
    const val= localStorage.getItem(carId.toString())
    if(val){
      return true
    }
    return false
  }
}
