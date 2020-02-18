import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  onLogin(loginCreds: any) {

    // if(loginCreds.username ==='ahmed'&& loginCreds.password ==='123456')
    // return true;
    // return false;
    return this.http.get<any>(environment.tasksApiUrl + `users?username=${loginCreds.username}&password=${loginCreds.password}`);
   
  }

  isLogged() {
    return localStorage.getItem('loggedIn');
  }

  logout(){
    localStorage.setItem('loggedIn', 'false');
    this.router.navigate(['/login']);
  }

}