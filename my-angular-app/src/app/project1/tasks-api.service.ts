import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, 
  // Http, Headers, RequestOptions 
} from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, throwError } from 'rxjs';
import { map, filter, scan, catchError } from 'rxjs/operators'

export interface Groups{
  message: String,
  groups: {
    location: String,
    interests:[],
    title: String,
    description: String,
    agrrement: Boolean,
    users: [],
    events: [],
    _id: String,
    createAt: String,
    updatedAt: String,
    __v: number
  }
}

@Injectable({
  providedIn: 'root'
})
export class TasksApiService {

  
  task;
  constructor(private _http: HttpClient){
    //  this.getTasks();
   }
   getTasks(){
   // our http response is an Observable, store it in a variable
      return this._http.get('/api/tasks');
   // subscribe to the Observable and provide the code we would like to do with our data from the response
      
   }
   getById(id){
    // our http response is an Observable, store it in a variable
       return this._http.get('/api/tasks/' + id)

    // subscribe to the Observable and provide the code we would like to do with our data from the response
    }
    errorHandler(error: HttpErrorResponse){
      return throwError(error.message || "Server Error");
    }
    // isTask(id){
    //   let result = false;
    //   this.getById(id)
    //       .subscribe(data => {
    //         if(data.message == 'Error'){
    //           result = false
    //         } else {
    //           result = true
    //         }
    //       })
    //   return result
    // }
    createTask(task){
      // our http response is an Observable, store it in a variable
      let domain = 'http://localhost:8000';
      // let user = {title: "title", description: "description", completed: true};
      return this._http.post('/api/tasks', task)
      // .pipe(catchError(this.handleError('searchHeroes', [])));
      // .map(res => res.json());  
      // subscribe to the Observable and provide the code we would like to do with our data from the response
    }
    updateTask(id, body){
      return this._http.put('/api/tasks/' + id, body)
    }
    deleteTask(id){
      return this._http.delete('/api/tasks/' + id)
    }
    showLike(term){
      return this._http.get('/api/like/'+term)
    }
    updateCompleted(id, body){
      return this._http.put('/api/tasks/'+ id +'/state', body)
    }

    getGroups(){
      // our http response is an Observable, store it in a variable
         return <any>this._http.get('/api/groups');
      // subscribe to the Observable and provide the code we would like to do with our data from the response
         
    }

    getGroupById(id){
      // our http response is an Observable, store it in a variable
         return <any>this._http.get('/api/groups/'+id);
      // subscribe to the Observable and provide the code we would like to do with our data from the response
         
    }
}
