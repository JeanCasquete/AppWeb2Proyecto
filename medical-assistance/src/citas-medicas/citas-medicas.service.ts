import { Injectable, NotFoundException } from '@nestjs/common';
import {CitaMedica} from "./citas-medicas.model"
import { DatabaseService } from '../database.service';

@Injectable()
export class CitasMedicasService {
    constructor(private db: DatabaseService) {}
    async registrarCitaMedica(citaMedica: CitaMedica): Promise<CitaMedica> {
      const { id, id_doctor, caso, medicina, detalles, id_usuario } = citaMedica;
      const query = `INSERT INTO cites_medicine (id, id_doctor, caso, medicina, detalles, id_usuario)
                   VALUES ($1, $2, $3, $4, $5, $6)`;
  
      const params = [id, id_doctor, caso, medicina, detalles, id_usuario];
  
      const result = await this.db.execute(query, params);
  
      if (result.rowCount > 0) {
          console.log("Registro exitoso:");
          return citaMedica;
      } else {
          throw new Error('Error al registrar el CitaMedica.');
      }
  }
  
  async actualizarCitaMedica(citaMedicaId: string, citaMedica: CitaMedica): Promise<CitaMedica> {
      const { id, id_doctor, caso, medicina, detalles, id_usuario } = citaMedica;
      const query = `UPDATE cites_medicine
                   SET id_doctor = $1, caso = $2, medicina = $3, detalles = $4, id_usuario = $5
                   WHERE id = $6`;
    
      const params = [id_doctor, caso, medicina, detalles, id_usuario, id];
    
      const result = await this.db.execute(query, params);
    
      if (result.rowCount > 0) {
          console.log("Actualización exitosa:");
          return citaMedica;
      } else {
          throw new NotFoundException(`No se encontró el CitaMedica con ID ${citaMedicaId}.`);
      }
  }
  
  
  async eliminarCitaMedica(id: string): Promise<void> {
      const query = `DELETE FROM cites_medicine WHERE id = $1`;
      const params = [id];
    
      const result = await this.db.execute(query, params);
    
      if (result.rowCount === 0) {
          throw new NotFoundException(`No se encontró el CitaMedica con ID ${id}.`);
      }
      console.log(`Eliminado correctamente CitaMedica con la id ${id}.`);
  }
}
