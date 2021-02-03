import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  /**
   * Input property che hanno un valore di default
   * Se il padre non passa nessun valore, verranno usate
   * queste di default
   */
  @Input() buttonText: string = 'Click me!';
  @Input() emitValue: any = 'Default value';

  @Output() eventEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.eventEmitter.emit(this.emitValue);
  }

}
