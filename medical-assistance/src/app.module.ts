import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database.service';
import { AuthModule } from './login-registro-auth/auth/auth.module';
import { DoctoresController } from './doctores/doctores.controller';
import { HistorialmedicoController } from './historialesmedicos/historialesmedicos.controller';
import { ActividadesController } from './actividades/actividades.controller';
import { DoctorService } from './doctores/doctor.service';
import { ActividadesService } from './actividades/actividades.service';
import { CitasMedicasModule } from './citas-medicas/citas-medicas.module';
import { HistorialMedicoService } from './historialesmedicos/historialesmedicos.service';
import { HistorialMedicoModule } from './historialesmedicos/historialesmedicos.module';
import { AlergiasModule } from './alergias/alergias.module';
import { AlergiasController } from './alergias/alergias.controller';
import { AlergiasService } from './alergias/alergias.service';

@Module({
  imports: [AuthModule, CitasMedicasModule, AlergiasModule, HistorialMedicoModule],
  controllers: [AppController, DoctoresController,HistorialmedicoController, ActividadesController,AlergiasController],
  providers: [AppService,DatabaseService,DoctorService, ActividadesService,HistorialMedicoService, AlergiasService],
})
export class AppModule {}