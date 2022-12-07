import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  is_dark = false;

  ngOnInit() {
    this.is_dark = !!localStorage.getItem('dark') || false;
  }

}
