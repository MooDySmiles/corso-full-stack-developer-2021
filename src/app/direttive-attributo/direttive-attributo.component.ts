import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direttive-attributo',
  templateUrl: './direttive-attributo.component.html',
  styleUrls: ['./direttive-attributo.component.scss']
})
export class DirettiveAttributoComponent implements OnInit {

  addPrimaClass = true;

  colorP: string = 'blue';

  constructor() { }

  ngOnInit(): void {
  }

  onCambiaClassP() {
    this.addPrimaClass = !this.addPrimaClass;
  }

  onTagPClick() {
    this.colorP = this.colorP === 'blue' ? 'red' : 'blue';
    /*
    if (this.colorP === 'blue') {
      this.colorP = 'purple';
    } else {
      this.colorP = 'blue';
    }
    */
  }

}
