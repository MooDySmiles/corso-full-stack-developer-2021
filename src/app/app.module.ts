import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimoComponent } from './primo/primo.component';
import { ButtonComponent } from './button/button.component';
import { DirettiveStrutturaliComponent } from './direttive-strutturali/direttive-strutturali.component';
import { DirettiveAttributoComponent } from './direttive-attributo/direttive-attributo.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponent,
    ButtonComponent,
    DirettiveStrutturaliComponent,
    DirettiveAttributoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
