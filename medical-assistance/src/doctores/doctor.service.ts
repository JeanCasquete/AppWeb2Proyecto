import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database.service';
import { Doctor } from './doctor/doctor.model';
import * as bcrypt from 'bcryptjs';
import { doc } from 'prettier';

@Injectable()
export class DoctorService {
  constructor(private db: DatabaseService) {}
  async registrarDoctor(doctor: Doctor): Promise<Doctor> {
    const query = `INSERT INTO doctores (id, nombre, telefono, correo, especializacion, id_usuario)
                   VALUES ($1, $2, $3, $4, $5, $6)`;
  
    const params = [
      doctor.id,
      doctor.nombre,
      doctor.telefono,
      doctor.correo,
      doctor.especializacion,
      doctor.id_usuario,
    ];
  
    const result = await this.db.execute(query, params);
  
    if (result.rowCount > 0) {
      console.log("Registro exitoso:");
      return doctor;
    } else {
      throw new Error('Error al registrar el doctor.');
    }
  }

  async actualizarDoctor(doctorId: string, doctor: Doctor): Promise<Doctor> {
    const query = `UPDATE doctores
                   SET nombre = $1, telefono = $2, correo = $3, especializacion = $4, id_usuario = $5
                   WHERE id = $6`;
    
    const params = [
      doctor.nombre,
      doctor.telefono,
      doctor.correo,
      doctor.especializacion,
      doctor.id_usuario,
      doctorId,
    ];
    
    const result = await this.db.execute(query, params);
    
    if (result.rowCount > 0) {
      console.log("Actualización exitosa:");
      return doctor;
    } else {
      throw new NotFoundException(`No se encontró el doctor con ID ${doctorId}.`);
    }
  }
  

  async eliminarDoctor(id: string): Promise<void> {
    const query = `DELETE FROM doctores WHERE id = $1`;
    const params = [id];
    
    const result = await this.db.execute(query, params);
    
    if (result.rowCount === 0) {
      throw new NotFoundException(`No se encontró el doctor con ID ${id}.`);
    }
    console.log(`Eliminado correctamente doctor con la id  ${id}.`);

  }
  
  
}