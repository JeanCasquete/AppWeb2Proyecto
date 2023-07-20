import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CitaMedica } from '../models/cita-medica.model';
import { User } from '../models/registro.model';
import { ActividadesMedicas } from '../models/actividades-medicas.model';
@Injectable({
  providedIn: 'root',
})
export class ControlService {
  constructor(private http: HttpClient) {}
  //Actividades medicas Servicios
  getDatosActividadesMedicas() {
    return this.http.get<ActividadesMedicas[]>(
      'http://localhost:4000/actividades'
    );
  }

  registrarActividadesMedicas(
    actividadesMedicas: ActividadesMedicas
  ): Observable<any> {
    return this.http.post(
      'http://localhost:4000/registro-actividad',
      actividadesMedicas
    );
  }

  actualizarActividadesMedicas(
    actividadesMedicas: ActividadesMedicas
  ): Observable<any> {
    return this.http.put(
      `http://localhost:4000/actualizar-actividad/${actividadesMedicas.id}`,
      actividadesMedicas
    );
  }

  eliminarActividadesMedicas(id: number): Observable<any> {
    return this.http.delete(`http://localhost:4000/eliminar-actividad/${id}`);
  }
  //Citas Medicas Servicios
  getDatosCitasMedicas() {
    return this.http.get<CitaMedica[]>(
      'http://localhost:4000/citas-medicas/CitasMedicas'
    );
  }

  registrarCitaMedica(citaMedica: CitaMedica): Observable<any> {
    return this.http.post(
      'http://localhost:4000/citas-medicas/registro-CitasMedicases',
      citaMedica
    );
  }

  actualizarCitaMedica(citaMedica: CitaMedica): Observable<any> {
    return this.http.put(
      `http://localhost:4000/citas-medicas/actualizar/${citaMedica.id}`,
      citaMedica
    );
  }

  eliminarCitaMedica(id: number): Observable<any> {
    return this.http.delete(
      `http://localhost:4000/citas-medicas/eliminar-CitasMedicas/${id}`
    );
  }

  //registro Servicio

  registrarUsuario(usuario: User): Observable<any> {
    console.log(usuario);
    return this.http.post('http://localhost:4000/auth/registro', usuario);
  }


  //Sistema de login
  private isLoggedIn = false;
  login(correo: string, contrasena: string): Observable<User> {
    const url = 'http://localhost:4000/auth/login';
    const body = { correo, contrasena };
    this.isLoggedIn = true;
    
    return this.http.post<User>(url, body);
  }

  logout() {
    // Lógica para cerrar sesión
    this.isLoggedIn = false;
  }

  isLoggedIna(): boolean {
    // Verificar si el usuario ha iniciado sesión
    return this.isLoggedIn;
  }


  GetHistorialMedico() {
    return this.http.get<[]>(
      'http://localhost:4000/historialmedico/1'
    );
  }


  //Servicio si quieren hacerlo aqui mismo comente y listo , sino hagan otro servicio para ustedes
}
