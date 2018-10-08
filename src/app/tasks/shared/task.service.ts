import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200' // TODO Remove this (see .23)
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  baseURL = 'http://localhost:8080/api/task/';

  getAllTasks(): Observable<any> {
    return this.http.get(this.baseURL,httpOptions); // TODO Remove httpOptions
  }

  getTaskById(id: number): Observable<any> {
    return this.http.get(this.baseURL+ id);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseURL, task, httpOptions);
  }

  updateTask(id:number, task: Task): Observable<Task> {
    return this.http.put<Task>(this.baseURL + id,task, httpOptions);
  }

  deleteTaskById(id:number): Observable<any> {
    return this.http.delete(this.baseURL + id);
  }

}
