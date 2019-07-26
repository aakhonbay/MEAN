import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  CanActivateChild, 
  UrlTree, 
  Router,
  CanActivate
} from '@angular/router';
import { Observable, pipe, Subject, of } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';

import { TasksApiService } from './tasks-api.service';

@Injectable({
  providedIn: 'root'
})
export class TaskDetailsGuard implements CanActivate {
    constructor(
      private tasksService: TasksApiService,
      private router: Router
      ) { }
  
      taskExists: String; 
      returnedData;
      access;
      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        const taskExists: boolean = !!this.tasksService.getById(route.paramMap.get('id'))
        if (!taskExists){
          return false
        } else {
          return true
        }
      }
}
