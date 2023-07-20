"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlergiasModule = void 0;
const common_1 = require("@nestjs/common");
const alergias_controller_1 = require("./alergias.controller");
const database_service_1 = require("../database.service");
const alergias_service_1 = require("./alergias.service");
let AlergiasModule = class AlergiasModule {
};
AlergiasModule = __decorate([
    (0, common_1.Module)({
        controllers: [alergias_controller_1.AlergiasController],
        providers: [alergias_service_1.AlergiasService, database_service_1.DatabaseService]
    })
], AlergiasModule);
exports.AlergiasModule = AlergiasModule;
//# sourceMappingURL=alergias.module.js.map