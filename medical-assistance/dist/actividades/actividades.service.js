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
exports.ActividadesService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database.service");
let ActividadesService = class ActividadesService {
    constructor(db) {
        this.db = db;
    }
    async registrarActividad(actividad) {
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
        }
        else {
            throw new Error('Error al crear una actividad.');
        }
    }
    async actualizarActividad(actividadId, actividad) {
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
        }
        else {
            throw new common_1.NotFoundException(`No se encontró la actividad con ID ${actividadId}.`);
        }
    }
    async eliminarActividad(id) {
        const query = `DELETE FROM activities_diaries WHERE id = $1`;
        const params = [id];
        const result = await this.db.execute(query, params);
        if (result.rowCount === 0) {
            throw new common_1.NotFoundException(`No se encontró la actividad con ID ${id}.`);
        }
        console.log(`Eliminado correctamente la actividad con el id:  ${id}.`);
    }
};
ActividadesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ActividadesService);
exports.ActividadesService = ActividadesService;
//# sourceMappingURL=actividades.service.js.map