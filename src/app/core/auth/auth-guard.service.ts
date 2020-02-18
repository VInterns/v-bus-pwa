import { Injectable } from '@angular/core';
import { LoginService } from '../http/login.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService:LoginService,private router:Router) { }

  canActivate()
  {
    if(this.authService.isLogged() === 'false'){
      this.router.navigate(['/login']);
    } else {
      return true;
    }
  }
}
