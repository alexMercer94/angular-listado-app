import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../persona.model';
import { LogginService } from '../LogginService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombreInput: string;
  apellidoInput: string;
  constructor(private logginService: LogginService, private personasServices: PersonasService) {
    this.personasServices.saludar.subscribe((indice: number) => alert('El indice es:' + indice));
   }

  ngOnInit() {
  }

  onAddPerson() {
    const persona1 =  new Persona(this.nombreInput, this.apellidoInput);
    this.personasServices.addPerson(persona1);
  }

}
