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
exports.CitasMedicasController = void 0;
const common_1 = require("@nestjs/common");
const citas_medicas_service_1 = require("./citas-medicas.service");
const citas_medicas_model_1 = require("./citas-medicas.model");
const database_service_1 = require("../database.service");
let CitasMedicasController = class CitasMedicasController {
    constructor(databaseService, citasMedicasService) {
        this.databaseService = databaseService;
        this.citasMedicasService = citasMedicasService;
    }
    async findDocs(res) {
        try {
            const results = await this.databaseService.query('SELECT * FROM cites_medicine');
            console.log('Resultados de la consulta:', results);
            res.json(results);
        }
        catch (error) {
            console.error('Error al hacer consulta:', error);
            res.status(500).json({ error: 'Error al hacer consulta' });
        }
    }
    async registro(CitasMedicas) {
        return await this.citasMedicasService.registrarCitaMedica(CitasMedicas);
    }
    async actualizarCitasMedicas(CitasMedicasId, CitasMedicas) {
        return await this.citasMedicasService.actualizarCitaMedica(CitasMedicasId, CitasMedicas);
    }
    async eliminarCitasMedicas(CitasMedicasId) {
        await this.citasMedicasService.eliminarCitaMedica(CitasMedicasId);
    }
};
__decorate([
    (0, common_1.Get)('/CitasMedicas'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CitasMedicasController.prototype, "findDocs", null);
__decorate([
    (0, common_1.Post)('registro-CitasMedicases'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [citas_medicas_model_1.CitaMedica]),
    __metadata("design:returntype", Promise)
], CitasMedicasController.prototype, "registro", null);
__decorate([
    (0, common_1.Put)('actualizar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, citas_medicas_model_1.CitaMedica]),
    __metadata("design:returntype", Promise)
], CitasMedicasController.prototype, "actualizarCitasMedicas", null);
__decorate([
    (0, common_1.Delete)('eliminar-CitasMedicas/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CitasMedicasController.prototype, "eliminarCitasMedicas", null);
CitasMedicasController = __decorate([
    (0, common_1.Controller)('citas-medicas'),
    __metadata("design:paramtypes", [database_service_1.DatabaseService, citas_medicas_service_1.CitasMedicasService])
], CitasMedicasController);
exports.CitasMedicasController = CitasMedicasController;
//# sourceMappingURL=citas-medicas.controller.js.map