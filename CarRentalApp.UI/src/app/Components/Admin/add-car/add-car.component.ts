import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarCrudService } from 'src/app/Services/car-crud.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {

  addForm=new FormGroup({
    maker:new FormControl('',[Validators.required]),
    model:new FormControl('',[Validators.required]),
    rentalPrice:new FormControl('',[Validators.required]),
    isAvailable:new FormControl('',[Validators.required])
  });

  constructor(private _carCrudService:CarCrudService,private toastr: ToastrService,private _router: Router){}

  onSubmit(){
    //create a car object
    const car={
      maker:this.addForm.value.maker,
      model:this.addForm.value.model,
      rentalPrice:this.addForm.value.rentalPrice,
      isAvailable:this.addForm.value.isAvailable
    }
    //call the service method and pass
    this._carCrudService.addCar(car).subscribe((res:any)=>{
      console.log(res);
      this.toastr.success('Successfully Added','Car Rental App')
    this._router.navigate(['/cars'])
    })
  }

  //for validation
  get maker(){
    return this.addForm.controls.maker;
  }
  get model(){
    return this.addForm.controls.model;
  }
  get rentalPrice(){
    return this.addForm.controls.rentalPrice;
  }

}
