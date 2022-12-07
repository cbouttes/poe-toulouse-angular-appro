import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../models/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  api_url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http : HttpClient) { }

  public getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.api_url);
  }



}
