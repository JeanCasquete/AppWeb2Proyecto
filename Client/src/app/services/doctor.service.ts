import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor.model';

@Injectable({
  providedIn: 'root'
})

export class DoctorService {

  constructor(private http: HttpClient) { }

  //Servicio de doctores
  getDatosDoctor() {
    return this.http.get<Doctor[]>("http://localhost:4000/doctores");}
    
    getDatosDoctorUno(nombre: string): Observable<any> {
      return this.http.get<Doctor>(`http://localhost:4000/doctores/${nombre}`);}

      getDatosDoctorID(id: number): Observable<any> {
        return this.http.get<Doctor>(`http://localhost:4000/doctores/${id}`);}  

  registrarDoctor(doctor: Doctor): Observable<any> {
    return this.http.post("http://localhost:4000/registro-doctores", doctor);}

  actualizarDoctor(doctor: Doctor): Observable<any> {
    return this.http.put(`http://localhost:4000/actualizar-doctor/${doctor.id}`, doctor);}

    eliminarDoctor(id: number): Observable<any> {
      return this.http.delete(`http://localhost:4000/eliminar-doctor/${id}`);
    }
    
  }

