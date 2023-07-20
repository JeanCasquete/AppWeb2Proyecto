import { Module } from '@nestjs/common';
import { CitasMedicasService } from './citas-medicas.service';
import { CitasMedicasController } from './citas-medicas.controller';
import { DatabaseService } from '../database.service';
@Module({
  controllers: [CitasMedicasController],
  providers: [CitasMedicasService,DatabaseService]

})
export class CitasMedicasModule {}
