import { Response } from 'express';
import { actividad } from './actividad/actividad.model';
import { ActividadesService } from './actividades.service';
import { DatabaseService } from 'src/database.service';
export declare class ActividadesController {
    private readonly databaseService;
    private readonly actividadesService;
    constructor(databaseService: DatabaseService, actividadesService: ActividadesService);
    findDocs(res: Response): Promise<void>;
    registro(actividad: actividad): Promise<actividad>;
    actualizarActividad(actividadId: string, actividad: actividad): Promise<actividad>;
    eliminarActividad(actividadId: string): Promise<void>;
}
