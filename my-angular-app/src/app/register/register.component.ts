import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TasksApiService } from '../project1/tasks-api.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _authService: AuthService, private router: Router) { }

  registerFormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

  })

  console(){
    console.log('registered')
  }

  onRegister() {
    let user = {
      email: this.registerFormGroup.value.email,
      password: this.registerFormGroup.value.password
    }

    return this._authService.registerUser(user).subscribe(
      res=>{
        localStorage.setItem('token', res.token)
        this.router.navigate(['login'])
      },
      err=>console.log(err)
    );
  }

}
