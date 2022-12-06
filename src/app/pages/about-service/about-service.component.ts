import { Component, OnInit } from '@angular/core';
import {DataService} from "../../utils/services/data.service";

@Component({
  selector: 'app-about-service',
  templateUrl: './about-service.component.html',
  styleUrls: ['./about-service.component.css']
})
export class AboutServiceComponent implements OnInit {
  message?: string;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.message = this.dataService.data;
    // message prend la valeur de data au moment de l'initialisation du composant
  }

  update() {
    //this.message = 'Nouvelle Valeur';
    // Ici : on ne modifie que la variable message, mais pas dans DataService

    // Pour modifier Data, dans DataService :
    this.dataService.updateData('Nouvelle Valeur');
    this.message = this.dataService.data;
  }

}
