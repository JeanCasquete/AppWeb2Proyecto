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
exports.DoctorService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database.service");
let DoctorService = class DoctorService {
    constructor(db) {
        this.db = db;
    }
    async registrarDoctor(doctor) {
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
        }
        else {
            throw new Error('Error al registrar el doctor.');
        }
    }
    async actualizarDoctor(doctorId, doctor) {
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
        }
        else {
            throw new common_1.NotFoundException(`No se encontró el doctor con ID ${doctorId}.`);
        }
    }
    async eliminarDoctor(id) {
        const query = `DELETE FROM doctores WHERE id = $1`;
        const params = [id];
        const result = await this.db.execute(query, params);
        if (result.rowCount === 0) {
            throw new common_1.NotFoundException(`No se encontró el doctor con ID ${id}.`);
        }
        console.log(`Eliminado correctamente doctor con la id  ${id}.`);
    }
};
DoctorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], DoctorService);
exports.DoctorService = DoctorService;
//# sourceMappingURL=doctor.service.js.map