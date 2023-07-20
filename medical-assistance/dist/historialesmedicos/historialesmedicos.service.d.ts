import { DatabaseService } from '../database.service';
import { HistorialMedico } from './historial-medico/historial-medico';
export declare class HistorialMedicoService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    getHistorialMedico(id: number): Promise<any>;
    registrarHistorial(HistorialMedico: HistorialMedico): Promise<HistorialMedico>;
    actualizarHistorialMedico(HistorialMedico_id: string, HistorialMedico: HistorialMedico): Promise<HistorialMedico>;
}
