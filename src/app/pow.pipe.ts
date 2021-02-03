import { Pipe, PipeTransform } from '@angular/core';
import { ExampleService } from './services/example.service';

@Pipe({
  name: 'pow'
})
export class PowPipe implements PipeTransform {

  constructor(private exampleService: ExampleService) {}

  transform(base: number, exponent: number = 2): number {
    return this.exampleService.pow(base, exponent);
  }

}
