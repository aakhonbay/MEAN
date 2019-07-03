import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TasksApiService } from '../project1/tasks-api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private _authService: AuthService) { }
  
  loginFormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

  })

  onLogin() {
    let user = {
      email: this.loginFormGroup.value.email,
      password: this.loginFormGroup.value.password
    }
    return this._authService.loginUser(user).subscribe(
      res=>{
        localStorage.setItem('token', res.token)
      },
      err=>console.log(err)
    );
  }


  ngOnInit() {
  }

}
