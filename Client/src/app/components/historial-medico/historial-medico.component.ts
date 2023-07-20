import { Component } from '@angular/core';
import { ControlService } from "../../services/control.service";
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: 'app-historial-medico',
  templateUrl: './historial-medico.component.html',
  styleUrls: ['./historial-medico.component.css']
})
export class HistorialMedicoComponent {
 
    constructor(private servicioBackend: ControlService) { }

    datos: {
       apellido: string,
       nombre: string,
       cedula: string,
       correo: string,
       detalles_consulta: string[],
       especializaciones_doctores: string[],
       casos_paciente: string[],
       estado: string,
       genero: string,
       medicina_mandada: string[],
      nombre_alergias: string[],
      nombre_doctores: string[],
      telefono_doctores: string[],
      tratamiento_alergias: string[],

      }[] = [];


    ngOnInit(): void {
      this.ObtenerDatos();
    }
  
    //Get
    ObtenerDatos(): void {
      this.servicioBackend.GetHistorialMedico().subscribe((datos: { 
        apellido: string,
        nombre: string,
        cedula: string,
        correo: string,
        detalles_consulta: string[],
        especializaciones_doctores: string[],
        casos_paciente: string[],
        estado: string,
        genero: string,
        medicina_mandada: string[],
       nombre_alergias: string[],
       nombre_doctores: string[],
       telefono_doctores: string[],
       tratamiento_alergias: string[],
      
      
      
      }[]) => {
        this.datos = datos;
        console.log(datos);
      });
    }

}
