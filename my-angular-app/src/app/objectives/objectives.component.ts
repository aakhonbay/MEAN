import { Component, OnInit, Input, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';


@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.css']
})
export class ObjectivesComponent implements OnInit {

  @Input() obj;
  @ViewChild('addObjective', {static: true}) addObjectiveRef: ElementRef;
  @Output() addedObjective = new EventEmitter<ElementRef>();
  onCompleted(event) {
    if (event.target.style.backgroundColor === '' && event.target.style.color === ''){
        event.target.style = "background-color: gray; color: white";
    }
    else { event.target.style = ""; }
  }
  onAddObjective() {
    console.log(this.addObjectiveRef.nativeElement.value)
    this.addedObjective.emit(this.addObjectiveRef.nativeElement.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
