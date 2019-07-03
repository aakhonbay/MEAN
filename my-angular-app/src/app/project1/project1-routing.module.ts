import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Project1Component } from './project1/project1.component';
import { TasksComponent } from './tasks/tasks.component';
import { project1RoutesNames } from './project1.routes'
import { BlogComponent } from './blog/blog.component';
import { ShowTaskComponent } from './tasks/show-task/show-task.component';
import { TaskDetailsGuard } from './task-details.guard';
import { FindComponent } from './find/find.component';
import { StartGroupComponent } from './start-group/start-group.component';
import { EventsComponent } from './events/events.component';
import { GroupsComponent } from './find/groups/groups.component';
import { MessagesComponent } from './messages/messages.component';
import { GroupShellComponent } from './group-shell/group-shell.component';
import { GroupPageComponent } from './group-shell/group-page/group-page.component';
import { ScheduleComponent } from './group-shell/schedule/schedule.component';
import { EventPageComponent } from './group-shell/event-page/event-page.component';



// import { ShowTaskComponent } from './show-task/show-task.component';
// import { EditTaskComponent } from './edit-task/edit-task.component';
// import { CreateTaskComponent } from './create-task/create-task.component';

const routes: Routes = [
  {
    path:'', redirectTo:'find', pathMatch: 'full'
  },
    {path:'', component: Project1Component, children: [
        {path: project1RoutesNames.blog , component: BlogComponent},
        {path: project1RoutesNames.tasks , component: TasksComponent},
        {
          path: ':id',
          component: GroupShellComponent,
          children:[
            { path: '', component: GroupPageComponent },
            { path:'schedule', component: ScheduleComponent },
            { path: 'events/:id', component: EventPageComponent  }
          ]
        },
        { 
          path: 'tasks/:id', component: ShowTaskComponent,
          canActivate: [TaskDetailsGuard]
        },
        {
          path:'find', component: FindComponent,
          children:[
            {
              path: '',
              component: GroupsComponent
            },
            {
              path: 'events',
              component: EventsComponent
            }
          ]
        },
        {
          path:'messages',
          component: MessagesComponent
        },
        {
          path:'start',
          component: StartGroupComponent
        }
    ]},

//   {path:'show-one/:id', component: ShowTaskComponent},
  // {path:'delete/:id', component: DeleteTaskComponent},
//   {path:'new', component: CreateTaskComponent},
//   {path:'update/:id', component: EditTaskComponent},
];

@NgModule({
imports: [
    RouterModule.forChild(routes)
    ],
  exports: [RouterModule]
})
export class Project1RoutingModule { }
