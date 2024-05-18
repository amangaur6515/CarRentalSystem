import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarRentService } from 'src/app/Services/car-rent.service';

@Component({
  selector: 'app-return-request-page',
  templateUrl: './return-request-page.component.html',
  styleUrls: ['./return-request-page.component.css']
})
export class ReturnRequestPageComponent {
  confirmForm=new FormGroup({
    comments:new FormControl(''),
  });
  
  rentalAgreementIdToBeReturned:number=0;
  constructor(private toastr:ToastrService,private route:Router,private _carRentService:CarRentService){
    this.rentalAgreementIdToBeReturned=this._carRentService.getRentalAgreementToBeReturned();
  }
  onSubmit(){
    this._carRentService.returnInitiate(this.rentalAgreementIdToBeReturned).subscribe((res:any)=>{
      this.toastr.success("Return Initiated","Car Rental App")
      this.route.navigate(['/user-rental-agreements'])
    })
    
  }


  
}
