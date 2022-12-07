import { Component, OnInit } from '@angular/core';
import {DataService} from "../../utils/services/data.service";
import {UserService} from "../../utils/services/user.service";
import {User} from "../../utils/models/User";
import {TodoService} from "../../utils/services/todo.service";
import {Todo} from "../../utils/models/todo";

@Component({
  selector: 'app-about-service',
  templateUrl: './about-service.component.html',
  styleUrls: ['./about-service.component.css']
})
export class AboutServiceComponent implements OnInit {
  message?: string;
  users: User[] = [];
  todos: Todo[] = [];

  constructor(private dataService: DataService, private userService: UserService, private todoService: TodoService) {}

  ngOnInit(): void {
    this.message = this.dataService.data;
    // message prend la valeur de data au moment de l'initialisation du composant

    this.userService.getUsers().subscribe(res => this.users = res);

    this.todoService.getTodos().subscribe(res => this.todos = res);
  }

  update() {
    //this.message = 'Nouvelle Valeur';
    // Ici : on ne modifie que la variable message, mais pas dans DataService

    // Pour modifier Data, dans DataService :
    this.dataService.updateData('Nouvelle Valeur');
    this.message = this.dataService.data;
  }

}
