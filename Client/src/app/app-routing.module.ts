import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent } from "./components/login/login.component"
import {RegistroComponent} from "./components/registro/registro.component"
import {ActividadesMedicasComponent} from "./components/actividades-medicas/actividades-medicas.component"
import {CitasMedicasComponent} from "./components/citas-medicas/citas-medicas.component"
import {HistorialMedicoComponent} from "./components/historial-medico/historial-medico.component"
import {DoctoresComponent} from "./components/doctores/doctores.component"
import {InicioComponent} from "./components/inicio/inicio.component"
import {PaginaNoEncontradaComponent} from "./components/pagina-no-encontrada/pagina-no-encontrada.component"
import { AlergiasComponent } from './components/alergias/alergias.component';
//Iniciar Server comando : ng serve
//Instalen Daisy o algo para el css

const routes: Routes = [
  {path:"Login" , component:LoginComponent},
  {path: '', redirectTo: 'Login', pathMatch: 'full'},
  {path:"Registro", component:RegistroComponent},
  { path: 'Inicio', redirectTo: 'Inicio/ActividadesMedicas', pathMatch: 'full' },
  {path:"Inicio", component:InicioComponent,
  children:[
    {path:"actividadesMedicas" , component:ActividadesMedicasComponent},
    {path:"citasMedicas" , component:CitasMedicasComponent},
    {path:"historialMedico" , component:HistorialMedicoComponent},
    {path:"doctores" , component:DoctoresComponent},
    {path:"alergias" , component:AlergiasComponent}]
  },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }