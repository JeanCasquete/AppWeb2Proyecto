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
exports.HistorialmedicoController = void 0;
const common_1 = require("@nestjs/common");
const historial_medico_1 = require("./historial-medico/historial-medico");
const historialesmedicos_service_1 = require("./historialesmedicos.service");
let HistorialmedicoController = class HistorialmedicoController {
    constructor(historialMedicoService) {
        this.historialMedicoService = historialMedicoService;
    }
    async getHistorialMedico(id, res) {
        try {
            const idNumber = parseInt(id);
            const results = await this.historialMedicoService.getHistorialMedico(idNumber);
            console.log('Resultados de la consulta:', results);
            res.json(results);
        }
        catch (error) {
            console.error('Error al hacer consulta:', error);
            res.status(500).json({ error: 'Error al hacer consulta' });
        }
    }
    async registrarAlergia(HistorialMedico) {
        return await this.historialMedicoService.registrarHistorial(HistorialMedico);
    }
    async actualizarAlergia(historial_medico_id, HistorialMedico) {
        return await this.historialMedicoService.actualizarHistorialMedico(historial_medico_id, HistorialMedico);
    }
};
__decorate([
    (0, common_1.Get)('historialmedico/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], HistorialmedicoController.prototype, "getHistorialMedico", null);
__decorate([
    (0, common_1.Post)('registrarHistorial'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [historial_medico_1.HistorialMedico]),
    __metadata("design:returntype", Promise)
], HistorialmedicoController.prototype, "registrarAlergia", null);
__decorate([
    (0, common_1.Put)('actualizar-historial/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, historial_medico_1.HistorialMedico]),
    __metadata("design:returntype", Promise)
], HistorialmedicoController.prototype, "actualizarAlergia", null);
HistorialmedicoController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [historialesmedicos_service_1.HistorialMedicoService])
], HistorialmedicoController);
exports.HistorialmedicoController = HistorialmedicoController;
//# sourceMappingURL=historialesmedicos.controller.js.map