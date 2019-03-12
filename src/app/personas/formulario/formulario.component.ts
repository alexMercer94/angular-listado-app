import { Component, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { LogginService } from '../../LogginService.service';
import { PersonasService } from '../../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombreInput: string;
  apellidoInput: string;
  constructor(private logginService: LogginService, private personasServices: PersonasService, private router: Router) {
    this.personasServices.saludar.subscribe((indice: number) => alert('El indice es:' + indice));
   }

  ngOnInit() {
  }

  onGuardarPerson() {
    const persona1 =  new Persona(this.nombreInput, this.apellidoInput);
    this.personasServices.addPerson(persona1);
    this.router.navigate(['personas']);
  }

}
