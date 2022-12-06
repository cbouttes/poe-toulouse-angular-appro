import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = 'Hello World';
  constructor() { }


  updateData(new_value: string) {
    this.data = new_value;
    console.log('[DataService] Data = ', this.data);
  }

}
