import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const router=inject(Router)
  const username=localStorage.getItem("username");
  if(username=="admin@nagarro.com"){
    return true;
  }else{
    //navigate to login
    router.navigate(['/login'])
    return false;
  }

  return true;
};
