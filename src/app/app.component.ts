import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Corso Angular Maggioli Academy 2021';

  today = new Date();

  showButtonLink = false;

  onCambiaMetodoLink() {
    this.showButtonLink = !this.showButtonLink;
  }

  onPrimoOutput(event: number) {
    console.warn(event);
  }

  onButtonEventEmitter(data) {
    console.error(data);
  }
}
