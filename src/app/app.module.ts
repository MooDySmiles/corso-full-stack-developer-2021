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
    path: '**',
    redirectTo: 'page-not-found',
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  }
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
