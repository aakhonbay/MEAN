import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = '/api/user/register';
  private loginUrl = '/api/user/login';
  constructor(private _http: HttpClient,
              private router: Router) { }

  loginUser(user){
    this.router.navigate(['/home'])
    return this._http.post<any>(this.loginUrl, user)
  }

  registerUser(user){
    return this._http.post<any>(this.registerUrl, user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
            
}
