import { Component, OnInit } from '@angular/core';
import { ControlService } from "../../services/control.service";
import { CitaMedica } from "../../models/cita-medica.model";

@Component({
  selector: 'app-citas-medicas',
  templateUrl: './citas-medicas.component.html',
  styleUrls: ['./citas-medicas.component.css']
})
export class CitasMedicasComponent implements OnInit {
  constructor(private servicioBackend: ControlService) { 
  
  }
  datos: CitaMedica[] = [];
  usuarioSeleccionado: any = null;
  nuevaCita: CitaMedica = {
    id: 0,
    id_doctor: 0,
    caso: '',
    medicina: '',
    detalles: '',
    id_usuario: 0
  };
  
  EditarCita: CitaMedica = {
    id: 0,
    id_doctor: 0,
    caso: '',
    medicina: '',
    detalles: '',
    id_usuario: 0
  };
  ngOnInit(): void {
    this.ObtenerDatos();
  }

  //Get
  ObtenerDatos() {
    this.servicioBackend.getDatosCitasMedicas().subscribe(datos => {
      this.datos = datos;
      console.log(datos)
    });
  }

  //Post
  AgregarDato() {
    this.servicioBackend.registrarCitaMedica(this.nuevaCita).subscribe(response => {
      console.log('Cita médica registrada exitosamente:', response);
      // Volver a obtener los datos actualizados después de agregar uno nuevo
      this.ObtenerDatos();
      // Limpiar el formulario
      this.nuevaCita = {
        id: 0,
        id_doctor: 0,
        caso: '',
        medicina: '',
        detalles: '',
        id_usuario: 0
      }; // Reiniciar la variable para una nueva cita
    });
  }

  // Put

  ObtenerDatosE(datoO:CitaMedica){
    this.usuarioSeleccionado = datoO
    console.log(this.usuarioSeleccionado.id)
    this.EditarCita = { ...datoO };
  }

  ModificarDatos(citaMedica: CitaMedica) {
    console.log(citaMedica)
    this.servicioBackend.actualizarCitaMedica(citaMedica).subscribe(response => {
      console.log('Cita médica actualizada exitosamente:', response);
      // Volver a obtener los datos actualizados después de modificar uno
      this.ObtenerDatos();
    });
  }

  // Delete
  EliminarDatos(id: number) {
    this.servicioBackend.eliminarCitaMedica(id).subscribe(response => {
      console.log('Cita médica eliminada exitosamente:', response);
      // Volver a obtener los datos actualizados después de eliminar uno
      console.log(id)
      this.ObtenerDatos();
    });
  }
  
}
