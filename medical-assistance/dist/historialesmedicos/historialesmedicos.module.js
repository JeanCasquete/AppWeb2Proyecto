"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistorialMedicoModule = void 0;
const common_1 = require("@nestjs/common");
const historialesmedicos_controller_1 = require("./historialesmedicos.controller");
const database_service_1 = require("../database.service");
const historialesmedicos_service_1 = require("./historialesmedicos.service");
let HistorialMedicoModule = class HistorialMedicoModule {
};
HistorialMedicoModule = __decorate([
    (0, common_1.Module)({
        controllers: [historialesmedicos_controller_1.HistorialmedicoController],
        providers: [historialesmedicos_service_1.HistorialMedicoService, database_service_1.DatabaseService],
    })
], HistorialMedicoModule);
exports.HistorialMedicoModule = HistorialMedicoModule;
//# sourceMappingURL=historialesmedicos.module.js.map