import { Component, OnInit } from '@angular/core';
import { TasksApiService } from '../../tasks-api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {
  task;
  param: String;
  errorMsg
  constructor(
    private _httpService: TasksApiService,
    private route: ActivatedRoute,
    private router: Router
    ){}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this._httpService.getById(params.get('id')).subscribe(data => {
        console.log("component:",data)
        this.task = data;
      } ,
      error => {
        console.log('fake id')
        // this.router.navigate(['/'])
        this.router.navigate(['project1/tasks'])
      }
      )
    }
    );
    }
}
