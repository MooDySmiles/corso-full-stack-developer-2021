import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor() { }

  pow(base: number, exponent: number): number {
    // return Math.pow(base, exponent);
    let result = base;

    for (let i = 1; i < exponent; i++) {
      result = result * base;
    }

    return result;
  }

  randomBaseNumber(): number {
    return this.randomNumber(100);
  }

  randomExponentNumber(): number {
    return this.randomNumber(10);
  }

  private randomNumber(mult: number): number {
    return Math.floor(Math.random() * mult);
  }
}
