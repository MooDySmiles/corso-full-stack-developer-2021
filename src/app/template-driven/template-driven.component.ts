import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../models/hero.model';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  myHero: Hero = new Hero('Walker Texas Ranger', 'Martial Arts', 'Chuck Norris');

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return;

    // Teoricamente invio dei dati
    alert('Invio del form');
  }

}
