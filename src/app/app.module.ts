import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { LoginPageComponent } from './modules/login/pages/login-page/login-page/login-page.component';
import { PageNotFoundComponent } from './shared/componant/page-not-found/page-not-found/page-not-found.component';
import { LoginService } from './core/http/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { MaterialModule } from './shared/materialModule';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginPageComponent,
    PageNotFoundComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
     HttpClientModule   ,
      MaterialModule   ,
     BrowserAnimationsModule,
    
  ],
  exports:[
    // MaterialModule
   ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 