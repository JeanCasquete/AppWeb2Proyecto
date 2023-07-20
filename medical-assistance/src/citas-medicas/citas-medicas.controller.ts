import { Body, Controller,Get,Res, HttpCode, Post,Put,Param,Delete } from '@nestjs/common';
import { CitasMedicasService } from './citas-medicas.service';
import {CitaMedica} from "./citas-medicas.model"
import { DatabaseService } from '../database.service';
import { Response } from 'express';

@Controller('citas-medicas')
export class CitasMedicasController {
  constructor(private readonly databaseService: DatabaseService,private readonly citasMedicasService: CitasMedicasService) {}
  
  @Get('/CitasMedicas')
    async findDocs(@Res() res: Response) {
      try {
        const results = await this.databaseService.query('SELECT * FROM cites_medicine');
        console.log('Resultados de la consulta:', results);
        res.json(results);
      } catch (error) {
        console.error('Error al hacer consulta:', error);
        res.status(500).json({ error: 'Error al hacer consulta' });
      }
    }

    @Post('registro-CitasMedicases')
    async registro(@Body() CitasMedicas: CitaMedica): Promise<CitaMedica> {
      return await this.citasMedicasService.registrarCitaMedica(CitasMedicas);
    }

    @Put('actualizar/:id')
    async actualizarCitasMedicas(@Param('id') CitasMedicasId: string, @Body() CitasMedicas: CitaMedica): Promise<CitaMedica> {
      return await this.citasMedicasService.actualizarCitaMedica(CitasMedicasId, CitasMedicas);
    }

    @Delete('eliminar-CitasMedicas/:id')
    async eliminarCitasMedicas(@Param('id') CitasMedicasId: string): Promise<void> {
      await this.citasMedicasService.eliminarCitaMedica(CitasMedicasId);
    }
}
