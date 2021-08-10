import { Component } from '@angular/core';

@Component({
  selector: 'ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styles: [
    `
      table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }

      td,
      th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }

      tr:nth-child(even) {
        background-color: #dddddd;
      }
    `
  ]
})
export class Ejercicio1Component {
  personas = [
    { nombre: 'Juan', edad: 13 },
    { nombre: 'Pedro', edad: 56 },
    { nombre: 'Pablo', edad: 18 }
  ];

  /**
   * Mostrar los datos como se muestran actualmente
   * pero usando las directivas ngIf y ngFor
   */
}
