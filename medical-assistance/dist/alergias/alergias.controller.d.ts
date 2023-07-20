import { Response } from 'express';
import { AlergiasService } from './alergias.service';
import { Alergia } from './alergia/alergia';
import { DatabaseService } from 'src/database.service';
export declare class AlergiasController {
    private readonly databaseService;
    private readonly AlergiasService;
    constructor(databaseService: DatabaseService, AlergiasService: AlergiasService);
    findDocs(res: Response): Promise<void>;
    registrarAlergia(Alergia: Alergia): Promise<Alergia>;
    actualizarAlergia(alergia_id: string, Alergia: Alergia): Promise<Alergia>;
    eliminarAlergia(actividadId: string): Promise<void>;
}
