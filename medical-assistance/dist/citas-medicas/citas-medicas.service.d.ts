import { CitaMedica } from "./citas-medicas.model";
import { DatabaseService } from '../database.service';
export declare class CitasMedicasService {
    private db;
    constructor(db: DatabaseService);
    registrarCitaMedica(citaMedica: CitaMedica): Promise<CitaMedica>;
    actualizarCitaMedica(citaMedicaId: string, citaMedica: CitaMedica): Promise<CitaMedica>;
    eliminarCitaMedica(id: string): Promise<void>;
}
