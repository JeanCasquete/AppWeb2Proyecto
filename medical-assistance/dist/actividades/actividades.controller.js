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
exports.ActividadesController = void 0;
const common_1 = require("@nestjs/common");
const actividad_model_1 = require("./actividad/actividad.model");
const actividades_service_1 = require("./actividades.service");
const database_service_1 = require("../database.service");
let ActividadesController = class ActividadesController {
    constructor(databaseService, actividadesService) {
        this.databaseService = databaseService;
        this.actividadesService = actividadesService;
    }
    async findDocs(res) {
        try {
            const results = await this.databaseService.query('select * from activities_diaries');
            console.log('Resultados de la consulta:', results);
            res.json(results);
        }
        catch (error) {
            console.error('Error al hacer consulta:', error);
            res.status(500).json({ error: 'Error al hacer consulta' });
        }
    }
    async registro(actividad) {
        return await this.actividadesService.registrarActividad(actividad);
    }
    async actualizarActividad(actividadId, actividad) {
        return await this.actividadesService.actualizarActividad(actividadId, actividad);
    }
    async eliminarActividad(actividadId) {
        await this.actividadesService.eliminarActividad(actividadId);
    }
};
__decorate([
    (0, common_1.Get)('/actividades'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ActividadesController.prototype, "findDocs", null);
__decorate([
    (0, common_1.Post)('registro-actividad'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [actividad_model_1.actividad]),
    __metadata("design:returntype", Promise)
], ActividadesController.prototype, "registro", null);
__decorate([
    (0, common_1.Put)('actualizar-actividad/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, actividad_model_1.actividad]),
    __metadata("design:returntype", Promise)
], ActividadesController.prototype, "actualizarActividad", null);
__decorate([
    (0, common_1.Delete)('eliminar-actividad/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ActividadesController.prototype, "eliminarActividad", null);
ActividadesController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService, actividades_service_1.ActividadesService])
], ActividadesController);
exports.ActividadesController = ActividadesController;
//# sourceMappingURL=actividades.controller.js.map