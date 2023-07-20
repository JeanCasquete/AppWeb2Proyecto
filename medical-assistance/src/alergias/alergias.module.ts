import { Module } from '@nestjs/common';
import { AlergiasController } from './alergias.controller';
import { DatabaseService } from '../database.service';
import { AlergiasService } from './alergias.service';
@Module({
  controllers: [AlergiasController],
  providers: [AlergiasService, DatabaseService]
})
export class AlergiasModule {}
