import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.scss']
})
export class PrimoComponent implements OnInit {

  @Input() courseName: string;

  @Output() primoOutput = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.primoOutput.emit(1);
  }

}
