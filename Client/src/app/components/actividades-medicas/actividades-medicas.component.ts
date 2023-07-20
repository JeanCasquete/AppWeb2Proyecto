import { Component, OnInit } from '@angular/core';
import { ControlService } from "../../services/control.service";
import { ActividadesMedicas } from "../../models/actividades-medicas.model";
import { DatePipe } from '@angular/common';
//Para crear componentes comando : ng g c components/nombre-del-Componente

@Component({
  selector: 'app-actividades-medicas',
  templateUrl: './actividades-medicas.component.html',
  styleUrls: ['./actividades-medicas.component.css']
})
export class ActividadesMedicasComponent implements  OnInit {
  constructor(private servicioBackend: ControlService) { }
  datos: ActividadesMedicas[] = [];
  usuarioSeleccionado: any = null;
  nuevaActividad: ActividadesMedicas = {
    id: 0,
    fecha:'',
    actividad: '',
    detalle: '',
    estado: '',
    id_usuario: 0
  };
  
  EditarActividad: ActividadesMedicas = {
    id: 0,
    fecha: '',
    actividad: '',
    detalle: '',
    estado: '',
    id_usuario: 0
  };
  ngOnInit(): void {
    this.ObtenerDatos();
  }

  //Get
  ObtenerDatos(): void {
    this.servicioBackend.getDatosActividadesMedicas().subscribe(datos => {
      this.datos = datos;
      console.log(datos)
    });
  }

  //Post
  AgregarDato() {
    this.servicioBackend.registrarActividadesMedicas(this.nuevaActividad).subscribe(response => {
      console.log('Se agrego exitosamente:', response);
      // Volver a obtener los datos actualizados después de agregar uno nuevo
      this.ObtenerDatos();
      // Limpiar el formulario
      this.nuevaActividad = {
        id: 0,
        fecha: '',
        actividad: '',
        detalle: '',
        estado: '',
        id_usuario: 0
      }; // Reiniciar la variable para una nueva cita
    });
  }

  // Put
  ObtenerDatosE(datoO: ActividadesMedicas) {
    this.usuarioSeleccionado = datoO
    console.log(this.usuarioSeleccionado.id)
    this.EditarActividad = { ...datoO };
  }
  
  ModificarDatos(actividadMedica: ActividadesMedicas) {
    console.log(actividadMedica)
    this.servicioBackend.actualizarActividadesMedicas(actividadMedica).subscribe(response => {
      console.log('Actividad actualizada exitosamente:', response);
      // Volver a obtener los datos actualizados después de modificar uno
      this.ObtenerDatos();
    });
  }

  // Delete
  EliminarDatos(id: number) {
    this.servicioBackend.eliminarActividadesMedicas(id).subscribe(response => {
      console.log('Actividad medica fue eliminada exitosamente:', response);
      // Volver a obtener los datos actualizados después de eliminar uno
      console.log(id)
      this.ObtenerDatos();
    });
  }  
}
