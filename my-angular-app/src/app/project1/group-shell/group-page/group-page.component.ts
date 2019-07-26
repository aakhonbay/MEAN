import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksApiService } from '../../tasks-api.service';




@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.css']
})
export class GroupPageComponent implements OnInit {
  groupId;
  groupAPI: any;
  events: [];
  constructor(private route: ActivatedRoute,
              private service: TasksApiService) { }
  ngOnInit() {
    this.route.paramMap.subscribe(
      observer => {
        this.groupId = observer.get('id');
      }
    )
    this.service.getGroupById(this.groupId).subscribe(
      res => {
        this.groupAPI = res.groups;
        this.events = this.groupAPI.events;
      }
    )
  }

}
