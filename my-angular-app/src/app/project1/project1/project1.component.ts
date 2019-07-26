import { Component, OnInit } from '@angular/core';
import { project1RoutesNames } from '../project1.routes'
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component{
  title = 'MEAN';
  blogs = {linkName: 'Discussion', url: 'discussion'};
  meetups = {linkName: 'Meetup', url: 'meetup'};
  linksArray= [
      {linkName: this.blogs.linkName, url: this.blogs.url},        
      {linkName: this.meetups.linkName, url: this.meetups.url},
  ];
  routes = this.linksArray;
  blog = this.blogs.url;
  meetup = this.meetups.url;
  constructor(private _authService: AuthService){}

}
