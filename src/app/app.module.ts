import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Ejercicio1Component } from './ejercicios/01/ejercicio1.component';
import { Ejercicio2Component } from './ejercicios/02/ejercicio2.component';
// import { Ejercicio1Component } from './ejercicios/01/ejercicio1.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, Ejercicio1Component, Ejercicio2Component],
  bootstrap: [AppComponent]
})
export class AppModule {}
