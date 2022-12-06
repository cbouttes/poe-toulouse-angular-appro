import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counter[count]',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  {
// Compteur est un composant enfant
  @Input() count!: number;

  @Output() update_event = new EventEmitter();

  askIncrement() {
    let copy = this.count;
    copy++;
    this.update_event.emit(copy);
  }

  askDecrement() {
    this.update_event.emit(this.count -1);
  }


}
