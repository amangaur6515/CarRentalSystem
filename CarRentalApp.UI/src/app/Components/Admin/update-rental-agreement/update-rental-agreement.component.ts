import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarCrudService } from 'src/app/Services/car-crud.service';
import { CarRentService } from 'src/app/Services/car-rent.service';

@Component({
  selector: 'app-update-rental-agreement',
  templateUrl: './update-rental-agreement.component.html',
  styleUrls: ['./update-rental-agreement.component.css']
})

export class UpdateRentalAgreementComponent {
  rentalAgreementId:number=0;
  rentalAgreement:any;
  car:any;

  editRentalAgreementForm=new FormGroup({
    duration:new FormControl('',[Validators.required]),
  });

  get duration(){
    return this.editRentalAgreementForm.controls.duration;
  }



  constructor(private router:ActivatedRoute,private route:Router,private _carRentService:CarRentService,private _carCrudService:CarCrudService,private toastr:ToastrService){
    this.router.params.subscribe(params => {
      //get the agreement id passed in url and store
      this.rentalAgreementId = params['id']; 
    });

    this.getRentalAgreementToBeEdited();
    
  }

  getRentalAgreementToBeEdited(){
    this._carRentService.getRentalAgreementById(this.rentalAgreementId).subscribe((res:any)=>{
      this.rentalAgreement=res;
      //set the form duration field
      this.editRentalAgreementForm.setValue({
        duration:this.rentalAgreement.duration,
      })
      //now get the car based on carId to be used while calculating new total price
      this._carCrudService.getCarById(this.rentalAgreement.carId).subscribe((res:any)=>{
        this.car=res;
       
      })
    })
  }

  

  onSubmit(){
    const duration:any=this.editRentalAgreementForm.value.duration;
    //create a new agreement obj
    const rentalAgreementObj={
      id:this.rentalAgreementId, //id remains same
      carId:this.rentalAgreement.carId,
      userId:this.rentalAgreement.userId,
      rentStartDate:this.rentalAgreement.rentStartDate,
      duration:duration,
      totalCost:(duration*(+this.car.rentalPrice)).toString(),
      returnStatus:this.rentalAgreement.returnStatus
    }
    //call service method
    this._carRentService.updateRentalAgreement(this.rentalAgreementId,rentalAgreementObj).subscribe((res:any)=>{
      console.log(res)
      this.toastr.success("Sucessfully Updated","Car Rental App");
      this.route.navigate(['/rental-agreements'])

    })
    

  }

  


}
