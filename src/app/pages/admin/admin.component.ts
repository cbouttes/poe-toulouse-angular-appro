import { Component, OnInit } from '@angular/core';
import {Data} from "@angular/router";
import {DataService} from "../../utils/services/data.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin_message?: string;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.admin_message = this.dataService.data;
  }

}
