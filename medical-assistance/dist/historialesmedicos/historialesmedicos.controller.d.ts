import { Response } from 'express';
import { HistorialMedico } from './historial-medico/historial-medico';
import { HistorialMedicoService } from './historialesmedicos.service';
export declare class HistorialmedicoController {
    private readonly historialMedicoService;
    constructor(historialMedicoService: HistorialMedicoService);
    getHistorialMedico(id: string, res: Response): Promise<void>;
    registrarAlergia(HistorialMedico: HistorialMedico): Promise<HistorialMedico>;
    actualizarAlergia(historial_medico_id: string, HistorialMedico: HistorialMedico): Promise<HistorialMedico>;
}
