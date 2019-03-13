import { Persona } from './persona.model';
import { LogginService } from './LogginService.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonasService {
    personas: Persona[] = [new Persona('Jhon', 'Dalvak'), new Persona('Alex', 'Mercer')];
    saludar = new EventEmitter<number>();

    constructor(private logginService: LogginService) {

    }

    addPerson(persona: Persona) {
        this.logginService.enviaMensajeConsola('Se ha agregado la persona: ' + persona.nombre);
        this.personas.push(persona);
    }

    encontrarPersona(index: number) {
        const persona: Persona = this.personas[index];
        return persona;
    }

    modificarPersona(index: number, persona: Persona) {
        const persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
    }

    eliminarPersona(index: number) {
        this.personas.splice(index, 1);
    }
}
