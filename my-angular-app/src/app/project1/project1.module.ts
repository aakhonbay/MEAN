import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project1RoutingModule } from './project1-routing.module';
import { Project1Component } from './project1/project1.component';
import { TasksComponent } from './tasks/tasks.component';
import { BlogComponent } from './blog/blog.component';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShowTaskComponent } from './tasks/show-task/show-task.component';
import { TaskDetailsGuard } from './task-details.guard';
import { FindComponent } from './find/find.component';
import { StartGroupComponent } from './start-group/start-group.component';
import { GroupPageComponent } from './group-shell/group-page/group-page.component';
import { EventsComponent } from './events/events.component';
import { GroupsComponent } from './find/groups/groups.component';
import { MessagesComponent } from './messages/messages.component';
import { EventPageComponent } from './group-shell/event-page/event-page.component';
import { ScheduleComponent } from './group-shell/schedule/schedule.component';
import { GroupShellComponent } from './group-shell/group-shell.component';

@NgModule({
  declarations: [
    Project1Component, 
    TasksComponent, 
    BlogComponent, 
    CreateTaskComponent,
    ShowTaskComponent,
    FindComponent,
    StartGroupComponent,
    GroupPageComponent,
    EventsComponent,
    GroupsComponent,
    MessagesComponent,
    EventPageComponent,
    ScheduleComponent,
    GroupShellComponent
  ],
  imports: [
    Project1RoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TaskDetailsGuard]
})
export class Project1Module { }
