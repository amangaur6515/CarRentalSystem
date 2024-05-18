import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarCrudService } from 'src/app/Services/car-crud.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  filteredItems:any=[];
  cars:any=[];
  
  searchForm=new FormGroup({
    searchTerm:new FormControl(''),
  });

  constructor(private _carCrudService:CarCrudService){
    this.getCars();
  }
  
  getCars(){
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

  updateFilteredItems(){
    const searchTerm=this.searchForm.value.searchTerm;
    this.filteredItems = this.cars.filter((item:any) =>
      item.maker.toLowerCase().includes(searchTerm?.toLowerCase()) ||  item.model.toLowerCase().includes(searchTerm?.toLowerCase()) || item.rentalPrice.toLowerCase().includes(searchTerm?.toLowerCase()) 
    );
    //this.cdRef.detectChanges();

  }

}
