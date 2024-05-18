import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarRentalApp.UI';

  constructor(private _authService:AuthService,private route:Router,private toastr:ToastrService){
    
  }
  get username(): string | null {
    return localStorage.getItem("username");
  }

  isAdmin(){
    //first there should be login
    const isLoggedIn=this._authService.isLoggedIn();
    if(isLoggedIn){
      //when there is a login match the username
      const username=this._authService.getUsername();
      if(username=="admin@nagarro.com"){
        return true;
      }
      
    }
    return false;
  }

  isRegularUser(){
    //first there should be login
    const isLoggedIn=this._authService.isLoggedIn();
    if(isLoggedIn){
      //when there is a login match the username
      const username=this._authService.getUsername();
      if(username!="admin@nagarro.com"){
        return true;
      }
      
    }
    return false;

  }

  isLogin(){
    return this._authService.isLoggedIn();
  }

  logout(){
    this._authService.deleteUsername();
    this.route.navigate([''])
    this.toastr.success("Logout Success","Car Rental App")
  }


  

}
