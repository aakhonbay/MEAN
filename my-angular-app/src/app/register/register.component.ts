import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TasksApiService } from '../project1/tasks-api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _authService: AuthService) { }

  registerFormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

  })

  onRegister() {
    let user = {
      email: this.registerFormGroup.value.email,
      password: this.registerFormGroup.value.password
    }
    return this._authService.registerUser(user).subscribe(
      res=>{
        localStorage.setItem('token', res.token)
      },
      err=>console.log(err)
    );
  }

}
