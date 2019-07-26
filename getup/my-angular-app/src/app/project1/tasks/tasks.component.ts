import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { TasksApiService } from '../tasks-api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  
  list = [];
  tasks$: Observable<any>;
  private searchTerms = new Subject<string>();
  tasks;
  selectedTask;
  form: FormGroup;
  thirdTask;
  allTasks = false;
  addForm = false;
  value = '';
  reverse = false;
  taskBeingUpdated;
  hideAddForm = false;
  nodeStyling;
  nodeStylingIndex;
  constructor(private _httpService: TasksApiService){
    this.form = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      completed: new FormControl(),
    });
  }
  addFormToggle(){
    // this._httpService.getTasks().subscribe(data => {
    //   this.allTasks = data;
    // })
    this.addForm = !this.addForm;
    this.hideAddForm = !this.hideAddForm;
  }
  addTask(e){
    // this.addForm = !this.addForm;
    this._httpService.getTasks().subscribe(data => {
      this.tasks = data;
      this.tasks.tasks[this.tasks.tasks.length -1].style = "true";
      this.allTasks = true;
      var self = this;
      this.list =  this.tasks.tasks.slice();
      this.nodeStylingIndex = this.tasks.tasks.length -1;
      this.nodeStyling = this.list[this.list.length-1];
      this.nodeStyling.style = "true";
      console.log("Add task list:",this.list[this.list.length-1])
      setTimeout(function(){
        console.log(this, self)
        self.tasks.tasks[self.tasks.tasks.length -1].style = "";
      },5000)
    })
  }
  completedToggle(id, e, index){
    this._httpService.updateCompleted(id, {completed: e.target.checked}).subscribe(value=>{
      this._httpService.getTasks().subscribe(data => {
        this.tasks = data;
        this.list = this.tasks.tasks.slice();
        if(this.reverse){
          this.list.reverse()
        }
      })
    });
  }
  deleteTask(id){
    console.log("Delete id:", id)
    this._httpService.deleteTask(id).subscribe(data=>{
      this._httpService.getTasks().subscribe(data => {
        this.tasks = data;
        if(this.reverse){
          this.list =  this.tasks.tasks.slice();
          this.list = this.list.reverse();
        } else { 
          this.list =  this.tasks.tasks.slice();
         }

      })
    })
  }
  editTask(id, i){
    this.selectedTask = id;
    this.taskBeingUpdated = i;
  }
  getAllTasks(){
    // this._httpService.getTasks().subscribe(data => {
    //   this.allTasks = data;
    // })
    this.tasks.tasks[this.tasks.tasks.length -1].style = "";

    this.allTasks = !this.allTasks;
    this.list =  this.tasks.tasks.slice();
    if(this.reverse){
      this.list.reverse()
    }
  }
  getTaskById(e){
    this.value += e.target.value;
    this._httpService.getById(e).subscribe(data => {
      console.log(data)
      this.thirdTask = data;
    })
  }
  hideAdd(){
    this.addForm = !this.addForm;
    this.hideAddForm = !this.hideAddForm;
  }
  hovering(index){
    if(index == this.nodeStylingIndex){
      console.log("Hovring", index, this.nodeStylingIndex)
      this.nodeStyling.style = '';
    }
  }
  reverseTasks(){
    this.list = this.list.reverse();
    this.reverse = !this.reverse;
  }
  search(term: string): void {
    this.tasks$ = this._httpService.getById(term)
    this.searchTerms.next(term);
  }
  onCompleted(event) {
    if (event.target.style.backgroundColor === '' && event.target.style.color === ''){
        event.target.style = "background-color: gray; color: white";
    }
    else { event.target.style = ""; }
  }
  onUpdateSubmit(id){
    const taskInput = {
      title: this.form.get('title').value, // E-mail input field
      description: this.form.get('description').value, // Username input field
      completed: this.form.get('completed').value // Password input field
    }
    let task = {title: taskInput.title, description: taskInput.description, completed: taskInput.completed};
    this._httpService.updateTask(id, task).subscribe((data)=>{
      this._httpService.getTasks().subscribe(data => {
        this.tasks = data;
        this.list = this.tasks.tasks.slice();
        this.list[this.taskBeingUpdated].style="true";
        if(this.reverse){
          this.list = this.list.reverse();
        }
      })
    });
    this.selectedTask = null;
    // this.onCompleted(this.taskBeingUpdated);
    let self = this;
    setTimeout(function(){
      console.log("Timer",self);
      self.list[self.taskBeingUpdated].style="";
    }, 5000)
  }
  ngOnInit(): void {
    this._httpService.getTasks().subscribe(data => {
      this.tasks = data;
      this.list = this.tasks.tasks.slice();
    })
    this.tasks$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this._httpService.getById(term)),
    );
  }


  selectedSection;
  i;
  onSelect(data: any, i: number){
    this.selectedSection = data;
    this.i = i;
  }
  sections = [
    {title:'section 6', objectives:[
        '77. Introduction -  00:50',
        '78. Adding Naigation with Event Binding and ngIf - 07:31',
        '79. Passing Recipe Data with Property Binding - 04:43',
        '80. Passing Data with Event and Property Binding (Combined) - 10:31',
        '81. Make sure you have FormsModule added! - Document',
        '82. Allowing the User to Add Ingredients to the Shopping List - 7:22',
      ]
    },
    {title:'section 7', objectives:[
        '83. Module Introduction -  01:23',
        '84. ngFor and ngIf Recap - 03:36',
        '85. ngClass and ngStyle Recap - 02:57',
        '86. Creating a Basic Attribute Directive - 06:42',
        '87. Using the Renderer to build a Better Attribute Directive - 07:04',
        '88. More about the Renderer - 07:04',
        '89. Using HostListener to Listen to Host Events - 03:00',
        '90. Using HostBinding to Bind to Host Properties - 03:17',
        '91. Binding to Directive Properties - 06:43',
        '92. What Happens behind the Scenes on Structural Directives - 03:04',
        '93. Building a Structural Directive - 06:13',
        '94. Understanding ngSwitch - 02:49',
      ]
    },
    {title:'section 9', objectives:[
      '96. Module Introduction -  01:39',
      '97. Why would you Need Services? - 02:04',
      '98.Creating a Logging Service - 03:32',
      '99. Injecting the Logging Service into Components - 06:21',
      '100. Creating a Data Service - 06:41',
      '101. Understanding the Hierarchical Injector - 02:40',
      '102. How many Instances of Service Should It Be? - 02:12',
      '103. Injecting Services into Services - 04:23',
      '104. Using Services for Cross-Component Communication - 04:06',
      'A.5. Assignment 5: Practicing Services - Assignment',
      '105. Services in Angular 6 - Doc',
    ]},
    {title:'Secion 10: Course Project - Services & Dependency Injection', objectives:[
      '106. Introduction -  01:23',
      '107. Setting up the Services - 01:15',
      '108. Managing Recipes in a Recipe Service - 04:07',
      '109. Using a Service for Cross-Component Communication - 05:07',
      '110. Adding the Shopping List Service - 05:04',
      '111. Using Services for Pushing Data from A to B - 03:08',
      '112. Adding Ingredients to Recipes - 03:08',
      '113. Adding Ingredients from Recipes to the Shopping List (via a Serivce) - 07:03',
    ]}, 
    {title:'Secion 11: Changing Pages with Routing', objectives:[
      '114. Module Introduction -  01:26',
      '115. Why do we need a Router? - 01:16',
      '116. Understanding the Example Project - Doc',
      '117. Setting up and Loading Routes - 08:01',
      '118. Navigating with Router Links - 05:18',
      '119. Understanding Navigation Paths - 04:54',
      '120. Styling Active Router Links - 05:01',
      '121. Navigating Programmatically - 03:28',
      '122. Using Relative Paths in Programmatic Navigation -  05:09',
      '123. Passing Parameters to Routes - 03:10',
      '124. Fetching Route Parameters - 04:01',
      '125. Fetching Route Parameters Reactively - 07:25',
      '126. An Important Note about Route Observables - 02:42',
      '127. Passing Query Parameters and Fragments - 05:53',
      '128. Retrieving Query Parameters and Fragments -  03:15',
      '129. Practicing and some Common Gothas - 06:07',
      '130. Setting up Child (Nested) Routes - 04:28',
      '131. Using Query Parameters - Practice - 05:36',
      '132. Configuring the Handling of Query Parameters - 01:50',
      '133. Redirecting and Wildcard Routes - 04:36',
      '134. Important: Redirection Path Matching - Doc',
      '135. Outsourcing the Route Configuration - 04:40',
      '136. An Introduction to Guards - 01:45',
      '137. Protecting Routes with canActicate - 08:55',
      '138. Protecting Child (Nested) Routes with canActivateChild - 02:51',
      '139. Using a Fake Auth Service - 01:43',
      '140. Controlling Navigation with canDeactivate - 12:28',
      '141. Passing Static Data to a Route - 05:56',
      '142. Resolving Dynamic Data with the resolve Guard - 09:53',
      '143. Understanding Location Strategies - 04:43',
      '144. Wrap Up - 05:36',
    ]},    
  ];
  pushObjective(event: string, indexValue: number) {
    this.sections[indexValue].objectives.push(event)
    console.log(event)
    console.log(indexValue)
  }


}
