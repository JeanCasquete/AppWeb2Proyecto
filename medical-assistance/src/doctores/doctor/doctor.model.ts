import { Injectable } from '@nestjs/common';

@Injectable()
export class Doctor {
  id: number;
  nombre: string;
  telefono: string;
  correo: string;
  especializacion: string;
  id_usuario: number;
}