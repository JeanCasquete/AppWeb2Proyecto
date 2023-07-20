import { CitasMedicasService } from './citas-medicas.service';
import { CitaMedica } from "./citas-medicas.model";
import { DatabaseService } from '../database.service';
import { Response } from 'express';
export declare class CitasMedicasController {
    private readonly databaseService;
    private readonly citasMedicasService;
    constructor(databaseService: DatabaseService, citasMedicasService: CitasMedicasService);
    findDocs(res: Response): Promise<void>;
    registro(CitasMedicas: CitaMedica): Promise<CitaMedica>;
    actualizarCitasMedicas(CitasMedicasId: string, CitasMedicas: CitaMedica): Promise<CitaMedica>;
    eliminarCitasMedicas(CitasMedicasId: string): Promise<void>;
}
