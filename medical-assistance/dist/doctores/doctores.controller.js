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
exports.DoctoresController = void 0;
const common_1 = require("@nestjs/common");
const doctor_model_1 = require("./doctor/doctor.model");
const doctor_service_1 = require("./doctor.service");
const database_service_1 = require("../database.service");
let DoctoresController = class DoctoresController {
    constructor(databaseService, doctoresService) {
        this.databaseService = databaseService;
        this.doctoresService = doctoresService;
    }
    async findDocs(res) {
        try {
            const results = await this.databaseService.query('SELECT * FROM doctores order by id ASC');
            console.log('Resultados de la consulta:', results);
            res.json(results);
        }
        catch (error) {
            console.error('Error al hacer consulta:', error);
            res.status(500).json({ error: 'Error al hacer consulta' });
        }
    }
    async findDocByNombre(res, nombre) {
        try {
            const query = 'SELECT * FROM doctores WHERE nombre ILIKE $1';
            const results = await this.databaseService.query(query, [nombre]);
            console.log('Resultados de la consulta:', results);
            console.log('Resultados de la consulta:', nombre);
            if (results.length === 0) {
                res.status(404).json({ error: 'Doctor no encontrado' });
            }
            else {
                res.json(results);
            }
        }
        catch (error) {
            console.error('Error al hacer consulta:', error);
            res.status(500).json({ error: 'Error al hacer consulta' });
        }
    }
    async findDocById(res, id) {
        try {
            const query = 'SELECT * FROM doctores WHERE id = $1';
            const results = await this.databaseService.query(query, [id]);
            console.log('Resultado de la consulta:', results);
            if (results.length === 0) {
                res.status(404).json({ error: 'Doctor no encontrado' });
            }
            else {
                res.json(results[0]);
            }
        }
        catch (error) {
            console.error('Error al hacer consulta:', error);
            res.status(500).json({ error: 'Error al hacer consulta' });
        }
    }
    async registro(doctor) {
        return await this.doctoresService.registrarDoctor(doctor);
    }
    async actualizarDoctor(doctorId, doctor) {
        return await this.doctoresService.actualizarDoctor(doctorId, doctor);
    }
    async eliminarDoctor(doctorId) {
        await this.doctoresService.eliminarDoctor(doctorId);
    }
};
__decorate([
    (0, common_1.Get)('/doctores'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DoctoresController.prototype, "findDocs", null);
__decorate([
    (0, common_1.Get)('/doctores/:nombre'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('nombre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DoctoresController.prototype, "findDocByNombre", null);
__decorate([
    (0, common_1.Get)('/doctoress/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], DoctoresController.prototype, "findDocById", null);
__decorate([
    (0, common_1.Post)('registro-doctores'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [doctor_model_1.Doctor]),
    __metadata("design:returntype", Promise)
], DoctoresController.prototype, "registro", null);
__decorate([
    (0, common_1.Put)('actualizar-doctor/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, doctor_model_1.Doctor]),
    __metadata("design:returntype", Promise)
], DoctoresController.prototype, "actualizarDoctor", null);
__decorate([
    (0, common_1.Delete)('eliminar-doctor/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DoctoresController.prototype, "eliminarDoctor", null);
DoctoresController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService, doctor_service_1.DoctorService])
], DoctoresController);
exports.DoctoresController = DoctoresController;
//# sourceMappingURL=doctores.controller.js.map