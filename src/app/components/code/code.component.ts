import {Component, Input, OnInit} from '@angular/core';
import {HighlightAutoResult} from "ngx-highlightjs";

@Component({
  selector: 'app-code[code]',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  @Input() code!: string;
  constructor() { }

  ngOnInit(): void {
  }

  onHighlight(e: HighlightAutoResult) {
    let response = {
      language: e.language,
      relevance: e.relevance,
    }
    console.log(response)
  }

}
