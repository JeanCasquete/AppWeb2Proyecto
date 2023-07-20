import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database.service';
import { Alergia } from './alergia/alergia';
@Injectable()
export class AlergiasService {
    constructor(private db: DatabaseService) {}
    async registrarAlergia(Alergia: Alergia): Promise<Alergia> {
        const query = `insert into alergias (nombre, tratamiento, id_usuario)
                       VALUES ($1,$2,$3)`;
        const params = [
            Alergia.nombre,
            Alergia.tratamiento,
            Alergia.id_usuario,
        ];
        const result = await this.db.execute(query, params);
        if (result.rowCount > 0) {
          console.log("registro correcto:");
          return Alergia;
        } else {
          throw new Error('Error al crear una Alergia.');
        }
      }
    
      async actualizarAlergia(Alergia_id: string, Alergia: Alergia): Promise<Alergia> {
        const query = `UPDATE alergias
                       SET nombre= $1, tratamiento= $2, id_usuario= $3
                       WHERE id = $4`;
        
        const params = [
            Alergia.id,
            Alergia.nombre,
            Alergia.tratamiento.toString(),
            Alergia.id_usuario,
        ];
        
        const result = await this.db.execute(query, params);
        
        if (result.rowCount > 0) {
          console.log("Actualización exitosa:");
          return Alergia;
        } else {
          throw new NotFoundException(`No se encontró la Alergia con ID ${Alergia_id}.`);
        }
      }
      
    
      async eliminarAlergia(id: string): Promise<void> {
        const query = `DELETE FROM alergias WHERE id = $1`;
        const params = [id];
        
        const result = await this.db.execute(query, params);
        
        if (result.rowCount === 0) {
          throw new NotFoundException(`No se encontró la alergia con ID ${id}.`);
        }
        console.log(`Eliminado correctamente la alergia con el id:  ${id}.`);
    
      }
}
