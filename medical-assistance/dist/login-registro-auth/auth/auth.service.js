"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../database.service");
const bcrypt = require("bcryptjs");
let AuthService = class AuthService {
    constructor(db) {
        this.db = db;
    }
    async registrarUsuario(usuario) {
        const query = `INSERT INTO users (nombre, apellido, cedula, correo, contrasena, genero, estado)
                    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
        const password = usuario.contrasena.substring(0, 50);
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
    async login(correo, contrasena) {
        console.log('Intentando login con correo:', correo, 'y contraseña:', contrasena);
        const query = `SELECT * FROM users WHERE correo = $1`;
        const values = [correo];
        try {
            const result = await this.db.execute(query, values);
            console.log('Rows:', result.rows);
            if (result.rows && result.rows.length === 1) {
                const user = result.rows[0];
                const passwordMatch = await bcrypt.compare(contrasena, user.contrasena);
                if (passwordMatch) {
                    return { user, message: 'Inicio de sesión exitoso' };
                }
                else {
                    return { user: null, message: 'Correo o contraseña incorrectos' };
                }
            }
            else {
                return { user: null, message: 'Correo o contraseña incorrectos' };
            }
        }
        catch (error) {
            console.error(error);
            return { user: null, message: 'Error al autenticar el usuario' };
        }
    }
    async updateUser(userId, updatedUserData) {
        const query = `UPDATE users SET nombre = $1, apellido = $2, cedula = $3, correo = $4, contrasena = $5, genero = $6, estado = $7  WHERE id = $8`;
        const password = updatedUserData.contrasena.substring(0, 50);
        const hashedPassword = await bcrypt.hash(password, 10);
        const values = [updatedUserData.nombre, updatedUserData.apellido, updatedUserData.cedula, updatedUserData.correo, hashedPassword, updatedUserData.genero, updatedUserData.estado, userId];
        try {
            const result = await this.db.execute(query, values);
            console.log('Rows affected:', result.rowCount);
            if (result.rowCount === 1) {
                return updatedUserData;
            }
            else {
                throw new Error('No se pudo actualizar el usuario');
            }
        }
        catch (error) {
            console.error(error);
            throw new Error('Error al actualizar el usuario');
        }
    }
    async deleteUser(userId) {
        const query = `DELETE FROM users WHERE id = $1`;
        const result = await this.db.execute(query, [userId]);
        if (result.rowCount === 0) {
            throw new common_1.NotFoundException(`El usuario con id ${userId} no existe`);
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map