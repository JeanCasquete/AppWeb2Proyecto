import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database.service';
import { actividad } from './actividad/actividad.model';
import * as bcrypt from 'bcryptjs';
import { doc } from 'prettier';

@Injectable()
export class ActividadesService {
    constructor(private db: DatabaseService) {}
  async registrarActividad(actividad: actividad): Promise<actividad> {
    const query = `insert into activities_diaries (id, fecha, actividad, detalle, estado, id_usuario)
                   VALUES ($1, $2, $3, $4, $5, $6)`;
    const params = [
      actividad.id,
      actividad.fecha,
      actividad.actividad,
      actividad.detalle,
      actividad.estado,
      actividad.id_usuario,
    ];
    const result = await this.db.execute(query, params);
    if (result.rowCount > 0) {
      console.log("registro correcto:");
      return actividad;
    } else {
      throw new Error('Error al crear una actividad.');
    }
  }

  async actualizarActividad(actividadId: string, actividad: actividad): Promise<actividad> {
    const query = `UPDATE activities_diaries
                   SET fecha= $1, actividad= $2, detalle= $3, estado= $4, id_usuario= $5
                   WHERE id = $6`;
    
    const params = [
      actividad.fecha,
      actividad.actividad,
      actividad.detalle,
      actividad.estado,
      actividad.id_usuario,
      actividadId,
    ];
    
    const result = await this.db.execute(query, params);
    
    if (result.rowCount > 0) {
      console.log("Actualización exitosa:");
      return actividad;
    } else {
      throw new NotFoundException(`No se encontró la actividad con ID ${actividadId}.`);
    }
  }
  

  async eliminarActividad(id: string): Promise<void> {
    const query = `DELETE FROM activities_diaries WHERE id = $1`;
    const params = [id];
    
    const result = await this.db.execute(query, params);
    
    if (result.rowCount === 0) {
      throw new NotFoundException(`No se encontró la actividad con ID ${id}.`);
    }
    console.log(`Eliminado correctamente la actividad con el id:  ${id}.`);

  }
}
