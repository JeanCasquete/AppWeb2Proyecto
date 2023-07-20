import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../../database.service';
import { User } from '../user/user.model';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private db: DatabaseService) {}

  async registrarUsuario(usuario: User): Promise<User> {
    const query = `INSERT INTO users (nombre, apellido, cedula, correo, contrasena, genero, estado)
                    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
  
    const password = usuario.contrasena.substring(0, 50); // Limitar la longitud de la contraseña a 50 caracteres
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const params = [
      usuario.nombre,
      usuario.apellido,
      usuario.cedula,
      usuario.correo,
      hashedPassword,
      usuario.genero,
      usuario.estado,
    ];
  
    const result = await this.db.execute(query, params);
if (result.rows.length > 0) {
  usuario.id = result.rows[0].id;
}
return usuario;
  }
  async login(correo: string, contrasena: string): Promise<{ user: User | null, message: string }> {
    console.log('Intentando login con correo:', correo, 'y contraseña:', contrasena);
    const query = `SELECT * FROM users WHERE correo = $1`;
    const values = [correo];
    try {
      const result = await this.db.execute(query, values);
      console.log('Rows:', result.rows);
      if (result.rows && result.rows.length === 1) {
        const user: User = result.rows[0];
        const passwordMatch = await bcrypt.compare(contrasena, user.contrasena);
        if (passwordMatch) {
          return { user, message: 'Inicio de sesión exitoso' };
        } else {
          return { user: null, message: 'Correo o contraseña incorrectos' };
        }
      } else {
        return { user: null, message: 'Correo o contraseña incorrectos' };
      }
    } catch (error) {
      console.error(error);
      return { user: null, message: 'Error al autenticar el usuario' };
    }
  }
  async updateUser(userId: number, updatedUserData: User): Promise<User> {
    const query = `UPDATE users SET nombre = $1, apellido = $2, cedula = $3, correo = $4, contrasena = $5, genero = $6, estado = $7  WHERE id = $8`;
    const password = updatedUserData.contrasena.substring(0, 50); // Limitar la longitud de la contraseña a 50 caracteres
    const hashedPassword = await bcrypt.hash(password, 10);
    const values = [updatedUserData.nombre, updatedUserData.apellido, updatedUserData.cedula, updatedUserData.correo, hashedPassword, updatedUserData.genero,updatedUserData.estado, userId];
    try {
      const result = await this.db.execute(query, values);
      console.log('Rows affected:', result.rowCount);
      if (result.rowCount === 1) {
        return updatedUserData;
      } else {
        throw new Error('No se pudo actualizar el usuario');
      }
    } catch (error) {
      console.error(error);
      throw new Error('Error al actualizar el usuario');
    }
  }
  async deleteUser(userId: number): Promise<void> {
    const query = `DELETE FROM users WHERE id = $1`;

    const result = await this.db.execute(query, [userId]);

    if (result.rowCount === 0) {
      throw new NotFoundException(`El usuario con id ${userId} no existe`);
    }
}
  
}
