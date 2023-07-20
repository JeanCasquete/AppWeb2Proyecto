import { Injectable } from '@nestjs/common';
@Injectable()
//Creamos Model de citas medicas
export class CitaMedica {
    id: number;
    id_doctor: number;
    caso: string;
    medicina: string;
    detalles: string;
    id_usuario: number;
  }