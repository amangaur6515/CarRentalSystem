import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CarCrudService {
  private carToBeEdited:any;
  private carId:number=0;

  constructor(private http:HttpClient) { }
  private apiUrl="https://localhost:7018/api/Car/";

  getCars(){
    return this.http.get(this.apiUrl+"GetCars");
  }
  editCar(id:any,updatedCar:any){
    return this.http.put(this.apiUrl+"UpdateCar/"+id,updatedCar)
  }
  addCar(car:any){
    return this.http.post(this.apiUrl+"AddCar",car)
  }
  deleteCar(id:number){
    return this.http.delete(this.apiUrl+"DeleteCar/"+id)
  }

  storeCar(car:any){
    this.carToBeEdited=car;
  }

  getCarToBeEdited(){
    return this.carToBeEdited;
  }

  storeCarId(id:number){
    this.carId=id;
  }
  //if rental agreement page is passing the id then get that id,
  //otherwise user-home page has stored the id, that will pe used,
  //this is called in car-rent page, to generate agreement by taking duration
  getCarById(carId:number=this.carId){
    
    return this.http.get(this.apiUrl+"GetCar/"+carId);
  }

}
