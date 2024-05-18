import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  //errors array
  errors:any=[];

  signupForm=new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",Validators.required),
  });
  
  constructor(private _authService:AuthService,private route:Router,private toastr:ToastrService) {}

  onSubmit(){
    //create user obj
    const user={
      email:this.signupForm.value.email,
      password:this.signupForm.value.password
    }
    //call the service method
    this._authService.signup(user).subscribe((res:any)=>{
      console.log(res);
      this.toastr.success("Successfully signup","Car Rental App");
      this.route.navigate(['/login']);
    },(err)=>{
      //add errors to array
      this.toastr.error("Password error","Car Rental App")
      if (err.error instanceof Array) {
        err.error.forEach((err: { description: any; }) => {
          this.errors.push(err.description);
        });
      }else {
        console.log(err); // Display the general error message
      }
    })

  }

  get email(){
    return this.signupForm.controls.email;
  }
  
  get password(){
    return this.signupForm.controls.password;
  }
  
}
