import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { TasksApiService } from '../../tasks-api.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  @ViewChild('title', {static: false }) titleField: ElementRef;
  // @Input() creating: Boolean;
  @Output() taskAdded = new EventEmitter();
  form: FormGroup;
  constructor(private _httpService: TasksApiService) { 
    this.form = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      completed: new FormControl(),
   });
  }
  // focus(){
  //   this.titleField.nativeElement.focus();
  // }

  onCreateSubmit(){

    const taskInput = {
      title: this.form.get('title').value, // E-mail input field
      description: this.form.get('description').value, // Username input field
      completed: this.form.get('completed').value // Password input field
    }
    console.log(taskInput)

    let task = {title: taskInput.title, description: taskInput.description, completed: taskInput.completed};
    this._httpService.createTask(task).subscribe(data=>{
      console.log(data)
      this.taskAdded.emit(data);
      this.form.reset();
      this.titleField.nativeElement.focus();
    })
  }
  ngOnInit(): void {
  }
}
