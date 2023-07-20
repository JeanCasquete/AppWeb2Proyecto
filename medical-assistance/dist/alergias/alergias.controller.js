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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlergiasController = void 0;
const common_1 = require("@nestjs/common");
const alergias_service_1 = require("./alergias.service");
const alergia_1 = require("./alergia/alergia");
const database_service_1 = require("../database.service");
let AlergiasController = class AlergiasController {
    constructor(databaseService, AlergiasService) {
        this.databaseService = databaseService;
        this.AlergiasService = AlergiasService;
    }
    async findDocs(res) {
        try {
            const results = await this.databaseService.query('select * from alergias');
            console.log('Resultados de la consulta:', results);
            res.json(results);
        }
        catch (error) {
            console.error('Error al hacer consulta:', error);
            res.status(500).json({ error: 'Error al hacer consulta' });
        }
    }
    async registrarAlergia(Alergia) {
        return await this.AlergiasService.registrarAlergia(Alergia);
    }
    async actualizarAlergia(alergia_id, Alergia) {
        return await this.AlergiasService.actualizarAlergia(alergia_id, Alergia);
    }
    async eliminarAlergia(actividadId) {
        await this.AlergiasService.eliminarAlergia(actividadId);
    }
};
__decorate([
    (0, common_1.Get)('alergias'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AlergiasController.prototype, "findDocs", null);
__decorate([
    (0, common_1.Post)('generar-alergia'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [alergia_1.Alergia]),
    __metadata("design:returntype", Promise)
], AlergiasController.prototype, "registrarAlergia", null);
__decorate([
    (0, common_1.Put)('actualizar-alergia/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, alergia_1.Alergia]),
    __metadata("design:returntype", Promise)
], AlergiasController.prototype, "actualizarAlergia", null);
__decorate([
    (0, common_1.Delete)('eliminar-alergia/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlergiasController.prototype, "eliminarAlergia", null);
AlergiasController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService, alergias_service_1.AlergiasService])
], AlergiasController);
exports.AlergiasController = AlergiasController;
//# sourceMappingURL=alergias.controller.js.map