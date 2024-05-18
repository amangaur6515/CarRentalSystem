import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarCrudService } from 'src/app/Services/car-crud.service';
import { CarRentService } from 'src/app/Services/car-rent.service';

@Component({
  selector: 'app-car-inspections',
  templateUrl: './car-inspections.component.html',
  styleUrls: ['./car-inspections.component.css']
})
export class CarInspectionsComponent {
  //array to store the cars under inspection from api
  carInspections:any=[];

  constructor(private toastr:ToastrService,private _carRentService:CarRentService,private _carCrudService:CarCrudService){
    this.getCarInspections();
  }

  getCarInspections(){
    //call the service method
    this._carRentService.getCarInspections().subscribe((res:any)=>{
      console.log(res);
      //carInspectins will contain the carId we need to get maker and model 
      for(let carInspection of res){
        //for each carInspection obj call the api and get the car object
        this._carCrudService.getCarById(carInspection.carId).subscribe((res:any)=>{
          let car=res;
          //in each carInspection object add two more propeties
          carInspection={...carInspection,maker:car.maker,model:car.model}
          //add the carInspection obj to our array
          this.carInspections.push(carInspection);
        })
      }
      

    })
  }

  inspectionCompleted(carId:number){
    //call the service method
    this._carRentService.inspectionCompleted(carId).subscribe((res:any)=>{
      this.toastr.success("Inspection Completed","Car Rental App");
      
      //update the inspections array
      
      // Find the index of the agreement  in the agreements array
      const index = this.carInspections.findIndex((obj:any) => obj.carId === carId);
      // If the agreement is found in the array, remove it
      if (index !== -1) {
        this.carInspections.splice(index, 1);
      }
    })
  }

}
