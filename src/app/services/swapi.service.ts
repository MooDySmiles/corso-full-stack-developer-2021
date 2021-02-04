import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) { }

  getLukeSkywalker() {
    console.info('getLukeSkywalker attivato');
    return this.http.get('https://swapi.dev/api/people/1/');
  }

  getLukeSkywalkerError() {
    console.info('getLukeSkywalker attivato');
    return this.http.get('https://swapi.dev/api/people/1/jabba');
  }
}
