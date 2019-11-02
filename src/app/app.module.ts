import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiComponente } from './components/mi-componente/mi-componente.component'; //cargo la clase/comp creado

@NgModule({
  declarations: [
    AppComponent,
    MiComponente
  ],
  imports: [ 
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
