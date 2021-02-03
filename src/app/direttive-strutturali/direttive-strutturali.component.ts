import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direttive-strutturali',
  templateUrl: './direttive-strutturali.component.html',
  styleUrls: ['./direttive-strutturali.component.scss']
})
export class DirettiveStrutturaliComponent implements OnInit {

  showP = false;

  myArray = [1, 2, 3, 4];

  constructor() { }

  ngOnInit(): void {
  }

  onMostraNascodiP() {
    this.showP = !this.showP;
  }
}
