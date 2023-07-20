"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_service_1 = require("./database.service");
const auth_module_1 = require("./login-registro-auth/auth/auth.module");
const doctores_controller_1 = require("./doctores/doctores.controller");
const historialesmedicos_controller_1 = require("./historialesmedicos/historialesmedicos.controller");
const actividades_controller_1 = require("./actividades/actividades.controller");
const doctor_service_1 = require("./doctores/doctor.service");
const actividades_service_1 = require("./actividades/actividades.service");
const citas_medicas_module_1 = require("./citas-medicas/citas-medicas.module");
const historialesmedicos_service_1 = require("./historialesmedicos/historialesmedicos.service");
const historialesmedicos_module_1 = require("./historialesmedicos/historialesmedicos.module");
const alergias_module_1 = require("./alergias/alergias.module");
const alergias_controller_1 = require("./alergias/alergias.controller");
const alergias_service_1 = require("./alergias/alergias.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, citas_medicas_module_1.CitasMedicasModule, alergias_module_1.AlergiasModule, historialesmedicos_module_1.HistorialMedicoModule],
        controllers: [app_controller_1.AppController, doctores_controller_1.DoctoresController, historialesmedicos_controller_1.HistorialmedicoController, actividades_controller_1.ActividadesController, alergias_controller_1.AlergiasController],
        providers: [app_service_1.AppService, database_service_1.DatabaseService, doctor_service_1.DoctorService, actividades_service_1.ActividadesService, historialesmedicos_service_1.HistorialMedicoService, alergias_service_1.AlergiasService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map