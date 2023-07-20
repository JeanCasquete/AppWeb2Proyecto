import { Response } from 'express';
import { Doctor } from './doctor/doctor.model';
import { DoctorService } from './doctor.service';
import { DatabaseService } from '../database.service';
export declare class DoctoresController {
    private readonly databaseService;
    private readonly doctoresService;
    constructor(databaseService: DatabaseService, doctoresService: DoctorService);
    findDocs(res: Response): Promise<void>;
    findDocByNombre(res: Response, nombre: string): Promise<void>;
    findDocById(res: Response, id: number): Promise<void>;
    registro(doctor: Doctor): Promise<Doctor>;
    actualizarDoctor(doctorId: string, doctor: Doctor): Promise<Doctor>;
    eliminarDoctor(doctorId: string): Promise<void>;
}
