import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AuthGuardService } from './core/auth/auth-guard.service';
import { LoginPageComponent } from './modules/login/pages/login-page/login-page/login-page.component';
import { PageNotFoundComponent } from './shared/componant/page-not-found/page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'home',component:MainComponent},
  {path:'',component:LoginPageComponent},
  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
