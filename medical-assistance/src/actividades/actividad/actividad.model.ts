import { Injectable } from '@nestjs/common';

@Injectable()
export class actividad {
  id: number;
  fecha: string;
  actividad: string;
  detalle: string;
  estado: number;
  id_usuario: number;
}