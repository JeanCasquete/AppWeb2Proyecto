import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Alergias } from '../models/alergias.model';


@Injectable({
  providedIn: 'root'
})
export class AlergiasService {

  constructor(private http: HttpClient) { }

  getAlergias() {
    return this.http.get<Alergias[]>("http://localhost:4000/alergias");
  }

  registrarAlergia(alergia: Alergias): Observable<any> {
    return this.http.post("http://localhost:4000/generar-alergia", alergia);
  }

  ActualizarAlergia(alergia: Alergias): Observable<any> {
    return this.http.put(`http://localhost:4000/actualizar-alergia/${alergia.id}`, alergia);
  }

  eliminarAlergia(id: number): Observable<any> {
    return this.http.delete(`http://localhost:4000/eliminar-alergia/${id}`);
  }

}
