import { Component } from '@angular/core';
import { Alergias } from '../../models/alergias.model';
import { AlergiasService } from 'src/app/services/alergias.service'; 
import { ModalComponent } from 'src/app/modal/modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-alergias',
  templateUrl: './alergias.component.html',
  styleUrls: ['./alergias.component.css']
})
export class AlergiasComponent {


  datos: Alergias[]=[];
  alergiaForm: FormGroup;
  UpdatealergiaForm: FormGroup;
  alergiaSeleccionado: any = null;
    buscarTexto: string = '';


  constructor(private servicioBackend: AlergiasService, private formbuilder: FormBuilder) {
    this.alergiaForm = this.formbuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      tratamiento: ['', Validators.required],
      id_usuario: [2],
    });
    this.UpdatealergiaForm = this.formbuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      tratamiento: ['', Validators.required],
      id_usuario: [2],
    });
  }

  ngOnInit(): void {
    this.ObtenerDatos();
  }


  ObtenerDatos() {
    this.servicioBackend.getAlergias().subscribe(datos => {
      this.datos = datos;
      console.log(datos)
    });
  }


  AgregarDatos() {
    if (this.alergiaForm.valid) {
      const alergia= this.alergiaForm.value; // Utiliza una variable temporal para almacenar los datos del formulario
      this.servicioBackend.registrarAlergia(alergia).subscribe(
        response => {
          // Lógica a realizar cuando el registro sea exitoso
          console.log('Registro exitoso', response);
          // Reiniciar el formulario después de registrar los datos
          this.alergiaForm.reset();
          this.ObtenerDatos();
        },
        error => {
          // Lógica a realizar cuando ocurra un error durante el registro
          console.error('Error en el registro', error);
        }
      );
    }
  }

  EliminarDatos(id: number) {
    this.servicioBackend.eliminarAlergia(id).subscribe(response => {
      console.log('Alergia eliminada exitosamente:', response);
      // Volver a obtener los datos actualizados después de eliminar uno
      console.log(id)
      this.ObtenerDatos();
    });
  }


  //pUT
  UpdateDatos() {
    if (this.UpdatealergiaForm.valid) {
      const alergia= this.UpdatealergiaForm.value; // Utiliza una variable temporal para almacenar los datos del formulario
      this.servicioBackend.ActualizarAlergia(alergia).subscribe(
        response => {
          // Lógica a realizar cuando el registro sea exitoso
          console.log('Registro exitoso', response);
          // Reiniciar el formulario después de registrar los datos
          this.UpdatealergiaForm.reset();
          this.ObtenerDatos();
        },
        error => {
          // Lógica a realizar cuando ocurra un error durante el registro
          console.error('Error en el registro', error);
        }
      );
    }
  }

  ObtenerDatosE(datoO: Alergias) {
    this.alergiaSeleccionado = datoO;
    console.log(this.alergiaSeleccionado.id);
    this.UpdatealergiaForm.patchValue(datoO);
  }
  

}
