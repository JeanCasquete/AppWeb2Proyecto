import { DatabaseService } from '../database.service';
import { Doctor } from './doctor/doctor.model';
export declare class DoctorService {
    private db;
    constructor(db: DatabaseService);
    registrarDoctor(doctor: Doctor): Promise<Doctor>;
    actualizarDoctor(doctorId: string, doctor: Doctor): Promise<Doctor>;
    eliminarDoctor(id: string): Promise<void>;
}
