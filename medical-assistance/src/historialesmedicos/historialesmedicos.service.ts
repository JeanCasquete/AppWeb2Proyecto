import { Injectable,NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database.service';
import { HistorialMedico } from './historial-medico/historial-medico';
@Injectable()
export class HistorialMedicoService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getHistorialMedico(id: number) {
    try {
      const results = await this.databaseService.query(`
        SELECT h.id, h.id_usuario, u.nombre, u.apellido, u.cedula, u.correo,
          u.genero, u.estado,
          (SELECT ARRAY_AGG(cm.id_doctor)
          FROM cites_medicine cm
          WHERE cm.id_usuario = h.id_usuario) AS id_doctores,
          (SELECT ARRAY_AGG(d.nombre)
           FROM cites_medicine cm2
           INNER JOIN doctores d ON cm2.id_doctor = d.id
           WHERE cm2.id_usuario = h.id_usuario) AS nombre_doctores,
           (SELECT ARRAY_AGG(d.telefono)
           FROM cites_medicine cm3
           INNER JOIN doctores d ON cm3.id_doctor = d.id
           WHERE cm3.id_usuario = h.id_usuario) AS telefono_doctores,
           (SELECT ARRAY_AGG(d.especializacion)
           FROM cites_medicine cm4
           INNER JOIN doctores d ON cm4.id_doctor = d.id
           WHERE cm4.id_usuario = h.id_usuario) AS especializaciones_doctores,
           (SELECT ARRAY_AGG(cm5.id)
           FROM cites_medicine cm5
           WHERE h.id_usuario = cm5.id_usuario) AS id_citas_medicas,
           (SELECT ARRAY_AGG(cm6.caso)
           FROM cites_medicine cm6
           WHERE h.id_usuario = cm6.id_usuario) AS casos_paciente,
           (SELECT ARRAY_AGG(cm7.medicina)
           FROM cites_medicine cm7
           WHERE h.id_usuario = cm7.id_usuario) AS medicina_mandada,
           (SELECT ARRAY_AGG(cm8.detalles)
           FROM cites_medicine cm8
           WHERE h.id_usuario = cm8.id_usuario) AS detalles_consulta,
           (SELECT ARRAY_AGG(a.id)
           FROM alergias a
           WHERE h.id_usuario = a.id_usuario) AS id_alergias,
           (SELECT ARRAY_AGG(a.nombre)
           FROM alergias a
           WHERE h.id_usuario = a.id_usuario) AS nombre_alergias,
           (SELECT ARRAY_AGG(a.tratamiento)
           FROM alergias a
           WHERE h.id_usuario = a.id_usuario) AS tratamiento_alergias
        FROM history_medicine as h
        INNER JOIN users as u ON u.id = h.id_usuario
        INNER JOIN cites_medicine as c ON c.id = h.id_cites_medicine
        INNER JOIN alergias as a ON a.id = h.id_alergias
        WHERE h.id = ${id};
      `);

      return results;
    } catch (error) {
      console.error('Error al hacer consulta:', error);
      throw new Error('Error al hacer consulta');
    }

  }

  async registrarHistorial(HistorialMedico: HistorialMedico): Promise<HistorialMedico> {
    const query = `insert into history_medicine (id_usuario, id_cites_medicine, id_alergias)
                   VALUES ($1, $2, $3)`;
    const params = [
      HistorialMedico.id_usuario,
      HistorialMedico.id_cites_medicine,
      HistorialMedico.id_alergias,
    ];
    const result = await this.databaseService.execute(query, params);
    if (result.rowCount > 0) {
      console.log("registro correcto:");
      return HistorialMedico;
    } else {
      throw new Error('Error al crear un Historial Medico.');
    }
  }

  async actualizarHistorialMedico(HistorialMedico_id: string, HistorialMedico: HistorialMedico): Promise<HistorialMedico> {
    const query = `UPDATE history_medicine
                   SET id_usuario= $1, id_cites_medicine= $2, id_alergias= $3
                   WHERE id = $4`;
    
    const params = [
      HistorialMedico.id_usuario,
      HistorialMedico.id_cites_medicine,
      HistorialMedico.id_alergias,
    ];
    
    const result = await this.databaseService.execute(query, params);
    
    if (result.rowCount > 0) {
      console.log("Actualización exitosa:");
      return HistorialMedico;
    } else {
      throw new NotFoundException(`No se encontró el historial con ID ${HistorialMedico_id}.`);
    }
  }
  

}
