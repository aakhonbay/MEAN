import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-group',
  templateUrl: './start-group.component.html',
  styleUrls: ['./start-group.component.css']
})
export class StartGroupComponent implements OnInit {

  constructor(private http: HttpClient,
              private router: Router) { }

  startForm = new FormGroup({
    location: new FormControl(''),
    interests: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    agreement: new FormControl('Agree'),
  });

  onStartFormSubmit(){
    let group = {
      location: this.startForm.value.location,
      interests: this.startForm.value.interests,
      name: this.startForm.value.name,
      description: this.startForm.value.description,
      agreement: this.startForm.value.agreement,
    }
    this.http.post<any>('/api/groups/', group).subscribe(
      res => {
        if(res.message == 'Success'){
          console.log(res)
          this.router.navigate(['/project1/find'])
        } else {
          this.router.navigate(['/project1/start'])
        }
      },
      err => console.log(err)
    );
  }
  
  ngOnInit() {
  }

}
