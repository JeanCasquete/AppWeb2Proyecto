import { Response } from 'express';
import { DatabaseService } from './database.service';
export declare class AppController {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    findAll(res: Response): Promise<void>;
    getUsuarios(res: Response): any;
}
