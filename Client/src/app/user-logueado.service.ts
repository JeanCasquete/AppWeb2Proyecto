import { Injectable } from '@angular/core';
import { User } from './models/registro.model';

@Injectable({
  providedIn: 'root'
})
export class UserLogueadoService {
  private usuarioLogueado: User | null;
  constructor() { 
    this.usuarioLogueado = null;
  }
  setUsuarioLogueado(usuario: User): void {
    this.usuarioLogueado = usuario;
  }

  getUsuarioLogueado(): User | null {
    return this.usuarioLogueado;
  }
}
