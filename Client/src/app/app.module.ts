import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CitasMedicasComponent } from './components/citas-medicas/citas-medicas.component';
import { HistorialMedicoComponent } from './components/historial-medico/historial-medico.component';
import { ActividadesMedicasComponent } from './components/actividades-medicas/actividades-medicas.component';
import { DoctoresComponent } from './components/doctores/doctores.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { ModalComponent } from './modal/modal.component';
import { AlergiasComponent } from './components/alergias/alergias.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    CitasMedicasComponent,
    HistorialMedicoComponent,
    ActividadesMedicasComponent,
    DoctoresComponent,
    InicioComponent,
    EncabezadoComponent,
    PaginaNoEncontradaComponent,
    ModalComponent,
    AlergiasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
