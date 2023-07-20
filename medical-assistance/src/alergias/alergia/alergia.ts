import { Injectable } from '@nestjs/common';

@Injectable()
export class Alergia {
    id: number;
    nombre: string;
    tratamiento: string;
    id_usuario: number;
}
