import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarRentService {
  private apiUrl="https://localhost:7018/api/CarRent/";
  rentalAgreement:any;
  //markedForInspection:number=0;
  //below value will be filled when user clicks return request button on my agreements page
  rentalAgreementIdToBeReturned:number=0;
  constructor(private http:HttpClient) { }

  storeRentalAgreement(obj:any){
    this.rentalAgreement=obj;
  }

  //it will give the agreement objects that is going to be generated
  getRentalAgreement(){
    console.log(this.rentalAgreement)
    return this.rentalAgreement;
  }
  //send the rental agreement to api
  acceptRentalAgreement(agreement:any){
    return this.http.post(this.apiUrl+"rent",agreement)
  }

  //get user rental agreements based on username
  getUserRentalAgreements(username:any){
    return this.http.get(this.apiUrl+"RentalAgreements/"+username)
  }

  returnInitiate(rentalAgreementId:number){
    return this.http.get(this.apiUrl+"Return/"+rentalAgreementId,)

  }

  storeRentalAgreementIdToBeReturned(id:number){
    this.rentalAgreementIdToBeReturned=id;
  }

  getRentalAgreementToBeReturned(){
    return this.rentalAgreementIdToBeReturned;
  }

  getAllRentalAgreements(){
    return this.http.get(this.apiUrl+"RentalAgreements/");
  }

  deleteRentalAgreement(agreementId:number){
    return this.http.delete(this.apiUrl+"Delete/"+agreementId);
  }

  getRentalAgreementById(rentalAgreementId:number){
    return this.http.get(this.apiUrl+"GetRentalAgreement/"+rentalAgreementId)
  }

  updateRentalAgreement(id:number,rentalAgreementObj:any){
    return this.http.put(this.apiUrl+"RentalAgreement/"+id,rentalAgreementObj)
  }

  markForInspection(obj:any){
    return this.http.post(this.apiUrl+"MarkForInspection",obj);
  }

  getCarInspections(){
    return this.http.get(this.apiUrl+"GetCarInspections");
  }

  inspectionCompleted(carId:number){
    return this.http.get(this.apiUrl+"InspectionCompleted/"+carId);
  }

  
  // storeMarkedForInspection(id:number){
  //   this.markedForInspection=id;

  // }
  // getMarkedForInspection(){
  //   return this.markedForInspection;
  // }
}
 