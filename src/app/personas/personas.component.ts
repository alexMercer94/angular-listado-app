import { Component, OnInit } from '@angular/core';
import { LogginService } from '../LogginService.service';
import { PersonasService } from '../personas.service';
import { Persona } from '../persona.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(
    private personaService: PersonasService,
    private rotuter: Router) {
  }

  ngOnInit(): void {
    this.personas = this.personaService.personas;
  }

  agregar() {
    this.rotuter.navigate(['personas/agregar']);
  }

}
