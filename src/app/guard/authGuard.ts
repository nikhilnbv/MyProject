import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';
import { Routes, RouterModule, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}


  canActivate() {
    console.log('AuthGuard#canActivate called');
    if (!(localStorage.getItem('currentUser'))) 
    {  
        this.router.navigate(['/login']);
        return false;
    }
        return true;
  }
}