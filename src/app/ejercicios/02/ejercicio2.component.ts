import { Component } from '@angular/core';

@Component({
  selector: 'ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css']
})
export class Ejercicio2Component {
  personas = [
    { nombre: 'Juan', edad: 13 },
    {
      nombre: 'Pedro',
      edad: 76,
      jubilacion: { monto: 5000, obraSocial: 'PAMI' }
    },
    { nombre: 'Pablo', edad: 18 }
  ];

  esJubilado(persona: number): string {
    if (persona > 65) {
      return 'mayor';
    } else if (persona < 65) {
      return 'menor';
    } else {
      return ' jubilado';
    }
  }

  /**
   * Como en el ejercicio anterior, mostrar los datos
   * como se muestran actualmente pero usando las
   * directivas ngIf y ngFor.
   *
   * Aplicarle la clase "mayor", "menor" o "jubilado"
   * según corresponda (jubilado > 65 años)
   *
   * Además, mostrar en el template (donde dice "Tabla de jubilación")
   * una nueva tabla con los datos de la misma
   */
}
