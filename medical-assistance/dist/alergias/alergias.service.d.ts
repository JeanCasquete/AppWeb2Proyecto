import { DatabaseService } from '../database.service';
import { Alergia } from './alergia/alergia';
export declare class AlergiasService {
    private db;
    constructor(db: DatabaseService);
    registrarAlergia(Alergia: Alergia): Promise<Alergia>;
    actualizarAlergia(Alergia_id: string, Alergia: Alergia): Promise<Alergia>;
    eliminarAlergia(id: string): Promise<void>;
}
