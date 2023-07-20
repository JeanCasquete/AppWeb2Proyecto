import { Injectable } from '@nestjs/common';

@Injectable()
export class HistorialMedico {
    id:number;
    id_usuario:number;
    id_cites_medicine:number;
    id_alergias:number;

}