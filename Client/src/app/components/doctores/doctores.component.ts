import { Component, OnInit } from '@angular/core';
import { DoctorService } from "../../services/doctor.service";
import { Doctor } from "../../models/doctor.model";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


//Para crear componentes comando : ng g c components/nombre-del-Componente
@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
  styleUrls: ['./doctores.component.css']
})

export class DoctoresComponent implements OnInit {
  datos: Doctor[]=[];
  doctorForm: FormGroup;
  UpdatedoctorForm: FormGroup;
  doctorSeleccionado: any = null;
    buscarTexto: string = '';

  limpiarTexto() {
    this.buscarTexto = '';
  }



  constructor(private servicioBackend: DoctorService, private formbuilder: FormBuilder) 
  { 
    this.doctorForm = this.formbuilder.group({
      id: [0, Validators.required],
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      especializacion: ['', Validators.required],
      id_usuario: ['', Validators.required],
    });
    this.UpdatedoctorForm = this.formbuilder.group({
      id: [0, Validators.required],
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      especializacion: ['', Validators.required],
      id_usuario: ['', Validators.required],
    });
  }


  ngOnInit(): void {
    this.ObtenerDatos();
  }

  AgregarDatos() {
    if (this.doctorForm.valid) {
      const doctor= this.doctorForm.value; // Utiliza una variable temporal para almacenar los datos del formulario
      this.servicioBackend.registrarDoctor(doctor).subscribe(
        response => {
          // Lógica a realizar cuando el registro sea exitoso
          console.log('Registro exitoso', response);
          // Reiniciar el formulario después de registrar los datos
          this.doctorForm.reset();
          this.ObtenerDatos();
        },
        error => {
          // Lógica a realizar cuando ocurra un error durante el registro
          console.error('Error en el registro', error);
        }
      );
    }
  }
  
  


    //Get
    ObtenerDatos() {
      this.servicioBackend.getDatosDoctor().subscribe(datos => {
        this.datos = datos;
        console.log(datos)
      });
    }
    //Delete
    EliminarDatos(id: number) {
      this.servicioBackend.eliminarDoctor(id).subscribe(response => {
        console.log('Cita médica eliminada exitosamente:', response);
        // Volver a obtener los datos actualizados después de eliminar uno
        console.log(id)
        this.ObtenerDatos();
      });
    }


    //pUT
    UpdateDatos() {
      if (this.UpdatedoctorForm.valid) {
        const doctor= this.UpdatedoctorForm.value; // Utiliza una variable temporal para almacenar los datos del formulario
        this.servicioBackend.actualizarDoctor(doctor).subscribe(
          response => {
            // Lógica a realizar cuando el registro sea exitoso
            console.log('Registro exitoso', response);
            // Reiniciar el formulario después de registrar los datos
            this.UpdatedoctorForm.reset();
            this.ObtenerDatos();
          },
          error => {
            // Lógica a realizar cuando ocurra un error durante el registro
            console.error('Error en el registro', error);
          }
        );
      }
    }

    ObtenerDatosE(datoO: Doctor) {
      this.doctorSeleccionado = datoO;
      console.log(this.doctorSeleccionado.id);
      this.UpdatedoctorForm.patchValue(datoO);
    }
    

    
    buscarDoctor(buscarTexto: string) {
      if (buscarTexto) {
        this.servicioBackend.getDatosDoctorUno(buscarTexto).subscribe((response) => {
          this.datos = response;
          console.log(this.datos)
        });
      } else {
        this.ObtenerDatos();
      }
    }

    
}
