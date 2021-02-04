import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Hero } from '../models/hero.model';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  myHero: Hero = new Hero('Walker Texas Ranger', 'Martial Arts', 'Chuck Norris');

  // heroNome: FormControl = new FormControl('');
  // heroPower: FormControl = new FormControl('');

  // mappa { nome-control: FormControl }
  heroForm: FormGroup = new FormGroup({
    // Uso array di validatori se ne voglio usare più di uno
    nome: new FormControl('', [ Validators.required, Validators.minLength(4) ]),
    // Posso usare il riferimento diretto se ne uso uno solo
    power: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
    // this.heroNome.setValue(this.myHero.nome);

    // this.heroForm.get('nome').setValue(this.myHero.nome);
    // this.heroForm.get('power').setValue(this.myHero.power);

    this.heroForm.setValue({
      nome: this.myHero.nome,
      power: this.myHero.power,
    });
  }

  onPatchForm() {
    this.heroForm.patchValue({
      power: 'Godness',
    });

    // Se usiamo setValue ci darebbe errore durante l'esecuzione
    // this.heroForm.setValue({
    //   power: 'Godness',
    // });
  }

  onHeroFormSubmit() {
    if (this.heroForm.invalid) return;

    this.myHero.nome = this.heroForm.get('nome').value;
    this.myHero.power = this.heroForm.get('power').value;
  }
}
