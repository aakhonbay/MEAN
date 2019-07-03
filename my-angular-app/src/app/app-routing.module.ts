import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appRoutesNames } from './app-routes-names.routes'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { MainComponent } from './main/main.component';
import { AppDownloadComponent } from './app-download/app-download.component';

const routes: Routes = [
  {
    path:'', component: MainComponent
  },
  {
    path: 'apps', component: AppDownloadComponent
  },
  {
    path: appRoutesNames.login,
    component: LoginComponent
  },
  {
    path: appRoutesNames.home,
    component: HomePageComponent
  },
  {
    path: appRoutesNames.register,
    component: RegisterComponent
  },
  {
    path: appRoutesNames.project1,
    loadChildren: () => import('./project1/project1.module').then(mod => mod.Project1Module),
    data: { preload: true },
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
