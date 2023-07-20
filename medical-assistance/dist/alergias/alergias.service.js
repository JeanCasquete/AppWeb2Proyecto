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
exports.AlergiasService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database.service");
let AlergiasService = class AlergiasService {
    constructor(db) {
        this.db = db;
    }
    async registrarAlergia(Alergia) {
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
        }
        else {
            throw new Error('Error al crear una Alergia.');
        }
    }
    async actualizarAlergia(Alergia_id, Alergia) {
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
        }
        else {
            throw new common_1.NotFoundException(`No se encontró la Alergia con ID ${Alergia_id}.`);
        }
    }
    async eliminarAlergia(id) {
        const query = `DELETE FROM alergias WHERE id = $1`;
        const params = [id];
        const result = await this.db.execute(query, params);
        if (result.rowCount === 0) {
            throw new common_1.NotFoundException(`No se encontró la alergia con ID ${id}.`);
        }
        console.log(`Eliminado correctamente la alergia con el id:  ${id}.`);
    }
};
AlergiasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], AlergiasService);
exports.AlergiasService = AlergiasService;
//# sourceMappingURL=alergias.service.js.map