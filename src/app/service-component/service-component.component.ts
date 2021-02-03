import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../services/example.service';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.scss']
})
export class ServiceComponentComponent implements OnInit {

  base: number;
  exponent: number;
  result: number;

  constructor(private exampleService: ExampleService) { }

  ngOnInit(): void {
  }

  onElevaPotenza() {
    this.base = this.exampleService.randomBaseNumber();

    this.exponent = this.exampleService.randomExponentNumber();

    this.result = this.exampleService.pow(this.base, this.exponent);
  }

}
