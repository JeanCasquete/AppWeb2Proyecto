import { Module } from '@nestjs/common';
import { HistorialmedicoController } from './historialesmedicos.controller';
import { DatabaseService } from '../database.service';
import { HistorialMedicoService } from './historialesmedicos.service';

@Module({

    controllers: [HistorialmedicoController],
    providers: [HistorialMedicoService,DatabaseService],

})
export class HistorialMedicoModule {}