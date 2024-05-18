import { Component } from '@angular/core';
import { CarCrudService } from 'src/app/Services/car-crud.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})

export class AllCarsComponent {
  //array to store cars from api
  cars:any=[];

  //filtered cars array
  filteredItems:any=[];

  searchForm=new FormGroup({
    searchTerm:new FormControl(''),
  });

  constructor(private _carCrudService:CarCrudService,private toastr:ToastrService,private route:Router){
    this.getCars();
  }
  
  getCars(){
    //call the service method
    this._carCrudService.getCars().subscribe((res:any)=>{
      this.cars=res;
      //completely assign it to the filtered items array so that initially all cars are displayed
      this.filteredItems=res;
      //now when the search term is entered filter from the cars array and assign again to filtered items by calling update method
      this.searchForm.valueChanges.subscribe(() => {
        this.updateFilteredItems();
      });
    })
  }

  //when the value in the search form changes this method will be called
  updateFilteredItems(){
    const searchTerm=this.searchForm.value.searchTerm;
    this.filteredItems = this.cars.filter((item:any) =>
      item.maker.toLowerCase().includes(searchTerm?.toLowerCase()) ||  item.model.toLowerCase().includes(searchTerm?.toLowerCase()) || item.rentalPrice.toLowerCase().includes(searchTerm?.toLowerCase()) 
    );
  }

  //store the carobj to be edited
  editCar(car:any){
    this._carCrudService.storeCar(car);
  }

  deleteCar(id:number){
    //call the service method
    this._carCrudService.deleteCar(id).subscribe((res:any)=>{
      console.log(res);
      this.toastr.success('Successfully Deleted','Car Rental App ')
    })

    //update the cars array
    // Find the index of the car  in the cars array
    const index = this.cars.findIndex((car:any) => car.id === id);
    // If the car is found in the array, remove it
    if (index !== -1) {
      this.cars.splice(index, 1);
    }
  }

}
