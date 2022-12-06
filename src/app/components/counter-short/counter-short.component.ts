import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counter-short',
  templateUrl: './counter-short.component.html',
  styleUrls: ['./counter-short.component.css']
})
export class CounterShortComponent  {
  @Input() count!: number;

  @Output() countChange = new EventEmitter<number>();

  askIncrement() {
    let copy = this.count;
    copy++;
    this.countChange.emit(copy);
  }

  askDecrement() {
    this.countChange.emit(this.count -1);
  }

}
