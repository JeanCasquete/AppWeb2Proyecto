import { Injectable } from '@nestjs/common';

@Injectable()
export class User {
  id: number;
  nombre: string;
  apellido: string;
  cedula: string;
  correo: string;
  contrasena: string;
  genero: string;
  estado: string;
}