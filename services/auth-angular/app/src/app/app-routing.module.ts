import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


const routes: Routes = [
  
  { path: 'home',   component: HomePageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
