import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/http/login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  message: string = '';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit()
   {
    this.initLoginForm();
    console.log(this.loginForm);
  }

  initLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onLogin() {
    console.log(this.loginForm.value);  
    if(this.loginForm.value.username === 'ahmed'&& this.loginForm.value.password ==='123456')
    {
        localStorage.setItem('loggedIn', 'true');
        this.router.navigate(['/Main/Home']);

    }
    else
    {

        localStorage.setItem('loggedIn', 'false');
        this.message = 'Username / Password is invalid';
    }
    // this.loginService.onLogin(this.loginForm.value).subscribe(logged => {
    //   console.log(logged);
    //   if (logged.length === 1) {
    //     localStorage.setItem('loggedIn', 'true');
    //     this.router.navigate(['/']);
    //   } else {
    //     localStorage.setItem('loggedIn', 'false');
    //     this.message = 'Username / Password is invalid';
    //   }
    // }, err => {
    //   console.log(err);
    // })
  }

}
