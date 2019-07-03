import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ObjectivesComponent } from './objectives/objectives.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TokenInterceptorService } from './token-interceptor.service'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TasksApiService } from './project1/tasks-api.service';
import { HomePageComponent } from './home-page/home-page.component';
import { MainComponent } from './main/main.component';
import { AppDownloadComponent } from './app-download/app-download.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjectivesComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    MainComponent,
    AppDownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ 
    AuthService, AuthGuard, TasksApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
