import {Component, Input, OnInit} from '@angular/core';
import {Toasts} from "../../utils/types/ToastMessages";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  @Input() toasts?: Toasts;
  constructor() { }

  ngOnInit(): void {}

}
