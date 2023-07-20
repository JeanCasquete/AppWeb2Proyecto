"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const historialesmedicos_service_1 = require("./historialesmedicos.service");
describe('HistorialesMedicosService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [historialesmedicos_service_1.HistorialMedicoService],
        }).compile();
        service = module.get(historialesmedicos_service_1.HistorialMedicoService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=historialesmedico.service.spect.js.map