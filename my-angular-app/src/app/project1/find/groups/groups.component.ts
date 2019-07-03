import { Component, OnInit } from '@angular/core';
import { TasksApiService } from '../../tasks-api.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor(private service: TasksApiService) { }

  groups;
  ngOnInit() {
    this.service.getGroups().subscribe(
      res => {
        this.groups = res.groups;
      },
      err => console.log(err)
    )
  }

}
