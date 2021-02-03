import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-component',
  templateUrl: './pipe-component.component.html',
  styleUrls: ['./pipe-component.component.scss']
})
export class PipeComponentComponent implements OnInit {

  today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
