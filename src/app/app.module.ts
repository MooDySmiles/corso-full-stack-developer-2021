import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimoComponent } from './primo/primo.component';
import { ButtonComponent } from './button/button.component';
import { DirettiveStrutturaliComponent } from './direttive-strutturali/direttive-strutturali.component';
import { DirettiveAttributoComponent } from './direttive-attributo/direttive-attributo.component';
import { PipeComponentComponent } from './pipe-component/pipe-component.component';
import { StringLengthPipe } from './string-length.pipe';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { PowPipe } from './pow.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule } from '@angular/forms';

/**
 * Oggetto di configurazione dei route di navigazione.
 *
 * Ogni oggetto Route ha le seguenti proprietà base:
 *
 *  path - indica un indirizzo URL relativo alla mia applicazione
 *
 *  component - indica qual è il componente da caricare quando l'utente naviga tale indirizzo URL
 *
 *  redirectTo - indica qual è l'URL da navigare quando si naviga in questo URL
 */
const routes: Routes = [
  {
    path: 'direttive-strutturali',
    component: DirettiveStrutturaliComponent,
  },
  {
    path: 'direttive-attributo',
    component: DirettiveAttributoComponent,
  },
  {
    path: 'pipe',
    component: PipeComponentComponent,
  },
  {
    path: 'service',
    component: ServiceComponentComponent,
  },
  {
    path: 'template-driven',
    component: TemplateDrivenComponent,
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponent,
    ButtonComponent,
    DirettiveStrutturaliComponent,
    DirettiveAttributoComponent,
    PipeComponentComponent,
    StringLengthPipe,
    ServiceComponentComponent,
    PowPipe,
    PageNotFoundComponent,
    TemplateDrivenComponent,
  ],
  imports: [
    BrowserModule,
    // .forRoot() accetta un oggetto di configurazione con la lista di rotte definite da noi
    RouterModule.forRoot(routes),
    // Ci serve per far funzionare i form Template-Driven per l'utilizzo delle direttive ngModel e ngForm
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
