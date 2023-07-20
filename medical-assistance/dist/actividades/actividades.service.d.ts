import { DatabaseService } from '../database.service';
import { actividad } from './actividad/actividad.model';
export declare class ActividadesService {
    private db;
    constructor(db: DatabaseService);
    registrarActividad(actividad: actividad): Promise<actividad>;
    actualizarActividad(actividadId: string, actividad: actividad): Promise<actividad>;
    eliminarActividad(id: string): Promise<void>;
}
