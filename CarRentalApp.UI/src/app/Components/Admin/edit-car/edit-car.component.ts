import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarCrudService } from 'src/app/Services/car-crud.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent {
  carToBeEdited:any;
  //for checked attribute
  isChecked:boolean=true;

  editForm=new FormGroup({
    maker:new FormControl('',[Validators.required]),
    model:new FormControl('',[Validators.required]),
    rentalPrice:new FormControl('',[Validators.required]),
    isAvailable:new FormControl('')
  });
  
  constructor(private _carCrudService:CarCrudService,private toastr: ToastrService,private _router: Router){
    this.getCarToBeEdited();

  }
  getCarToBeEdited(){
    //call the serice method and the carobj to be edited, stored there
    this.carToBeEdited=this._carCrudService.getCarToBeEdited();

    //prefill the form with actual data
    this.editForm.setValue({
      maker:this.carToBeEdited.maker,
      model:this.carToBeEdited.model,
      rentalPrice:this.carToBeEdited.rentalPrice,
      isAvailable:this.carToBeEdited.isAvailable
    })
    if(this.carToBeEdited.isAvailable=="false"){
      this.isChecked=!this.isChecked;
    }
   
  }

  onSubmit(){
    this.toastr.info('Successfully Edited','Car Rental App')
    this._router.navigate(['/cars'])
    this.editCar();
  }

  editCar(){
    //created a updated car obj
    const car={
      ...this.editForm.value,
      id:this.carToBeEdited.id //id will remain same
    }
    //call the service method
    this._carCrudService.editCar(this.carToBeEdited.id,car).subscribe((res:any)=>{
      console.log(res);
    })
  }

  //for validation
  get maker(){
    return this.editForm.controls.maker;
 
  }
  get model(){
    return this.editForm.controls.model;
 
  }
  get rentalPrice(){
    return this.editForm.controls.rentalPrice;

  }

  


  


}
