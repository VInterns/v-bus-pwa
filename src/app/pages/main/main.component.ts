import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/http/login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {
 
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void 
  {
  }


  logout()

  {
  localStorage.setItem('loggedIn', 'false');
  this.router.navigate(['']);

  }
}
