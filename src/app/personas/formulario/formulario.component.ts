import { Component, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { LogginService } from '../../LogginService.service';
import { PersonasService } from '../../personas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombreInput: string;
  apellidoInput: string;
  index: number;
  modoEdicion: number;

  constructor(private logginService: LogginService, private personasServices: PersonasService,
              private router: Router,
              private route: ActivatedRoute) {
    this.personasServices.saludar.subscribe((indice: number) => alert('El indice es:' + indice));
   }

  ngOnInit() {
    this.index = this.route.snapshot.params[`id`];
    this.modoEdicion = +this.route.snapshot.queryParams[`modoEdicion`];

    if (this.modoEdicion != null && this.modoEdicion === 1) {
      const persona: Persona = this.personasServices.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPerson() {
    const persona1 =  new Persona(this.nombreInput, this.apellidoInput);
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      this.personasServices.modificarPersona(this.index, persona1);
    } else {
      this.personasServices.addPerson(persona1);
    }
    this.router.navigate(['personas']);
  }

  eliminarPersona() {
    if (this.index != null) {
      this.personasServices.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }

}
