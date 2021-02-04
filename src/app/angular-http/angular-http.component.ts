import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-angular-http',
  templateUrl: './angular-http.component.html',
  styleUrls: ['./angular-http.component.scss']
})
export class AngularHttpComponent implements OnInit {

  swapiResult: any;

  error: any;

  constructor(private swapiService: SwapiService) { }

  ngOnInit(): void {
  }

  onRecuperaLukeSkywalker() {
    console.warn('onRecuperaLukeSkywalker attivato');

    this.swapiService.getLukeSkywalker().subscribe(
      (data) => {
        this.swapiResult = data;
      },
      (error) => {
        this.error = error;
      }
    );
  }

  onRecuperaErrore() {
    this.swapiService.getLukeSkywalkerError().subscribe(
      (data) => {
        this.swapiResult = data;
      },
      (error) => {
        this.error = error;
      }
    );
  }
}
