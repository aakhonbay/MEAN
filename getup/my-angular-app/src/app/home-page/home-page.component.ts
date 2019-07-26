import { Component, OnInit } from '@angular/core';
import { appRoutesNames } from '../app-routes-names.routes';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

project1 = {linkName: 'Getup project', url: 'project1'};
project2 = {linkName: 'Project 2', url: 'project2'};
linksArray = [
  { linkName: this.project1.linkName, url: this.project1.url },
];
  constructor() { }
  ngOnInit() {

  }

}






