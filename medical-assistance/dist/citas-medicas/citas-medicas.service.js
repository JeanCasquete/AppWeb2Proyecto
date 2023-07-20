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
exports.CitasMedicasService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database.service");
let CitasMedicasService = class CitasMedicasService {
    constructor(db) {
        this.db = db;
    }
    async registrarCitaMedica(citaMedica) {
        const { id, id_doctor, caso, medicina, detalles, id_usuario } = citaMedica;
        const query = `INSERT INTO cites_medicine (id, id_doctor, caso, medicina, detalles, id_usuario)
                   VALUES ($1, $2, $3, $4, $5, $6)`;
        const params = [id, id_doctor, caso, medicina, detalles, id_usuario];
        const result = await this.db.execute(query, params);
        if (result.rowCount > 0) {
            console.log("Registro exitoso:");
            return citaMedica;
        }
        else {
            throw new Error('Error al registrar el CitaMedica.');
        }
    }
    async actualizarCitaMedica(citaMedicaId, citaMedica) {
        const { id, id_doctor, caso, medicina, detalles, id_usuario } = citaMedica;
        const query = `UPDATE cites_medicine
                   SET id_doctor = $1, caso = $2, medicina = $3, detalles = $4, id_usuario = $5
                   WHERE id = $6`;
        const params = [id_doctor, caso, medicina, detalles, id_usuario, id];
        const result = await this.db.execute(query, params);
        if (result.rowCount > 0) {
            console.log("Actualización exitosa:");
            return citaMedica;
        }
        else {
            throw new common_1.NotFoundException(`No se encontró el CitaMedica con ID ${citaMedicaId}.`);
        }
    }
    async eliminarCitaMedica(id) {
        const query = `DELETE FROM cites_medicine WHERE id = $1`;
        const params = [id];
        const result = await this.db.execute(query, params);
        if (result.rowCount === 0) {
            throw new common_1.NotFoundException(`No se encontró el CitaMedica con ID ${id}.`);
        }
        console.log(`Eliminado correctamente CitaMedica con la id ${id}.`);
    }
};
CitasMedicasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], CitasMedicasService);
exports.CitasMedicasService = CitasMedicasService;
//# sourceMappingURL=citas-medicas.service.js.map