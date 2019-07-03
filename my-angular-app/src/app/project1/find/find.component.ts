import { Component, OnInit } from '@angular/core';
import { TasksApiService } from '../tasks-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent{
  groups = true;
  constructor() { }
  showGroups(){
    this.groups = true;
  }
  showCalendar(){
    this.groups = false;
  }
}
