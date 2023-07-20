import { Controller,Body,Get,Res, Post,Put,Param,Delete  } from '@nestjs/common';
import { Response } from 'express';
import { AlergiasService } from './alergias.service';
import { Alergia } from './alergia/alergia';
import { DatabaseService } from 'src/database.service';
@Controller()
export class AlergiasController {
    constructor(private readonly databaseService: DatabaseService,private readonly AlergiasService: AlergiasService) {}
    @Get('alergias')
    async findDocs(@Res() res: Response) {
      try {
        const results = await this.databaseService.query('select * from alergias');
        console.log('Resultados de la consulta:', results);
        res.json(results);
      } catch (error) {
        console.error('Error al hacer consulta:', error);
        res.status(500).json({ error: 'Error al hacer consulta' });
      }
    }
    @Post('generar-alergia')
    async registrarAlergia(@Body() Alergia: Alergia): Promise<Alergia> {
      return await this.AlergiasService.registrarAlergia(Alergia);
    }

    @Put('actualizar-alergia/:id')
    async actualizarAlergia(@Param('id') alergia_id: string, @Body() Alergia: Alergia): Promise<Alergia> {
      return await this.AlergiasService.actualizarAlergia(alergia_id, Alergia);
    }


    @Delete('eliminar-alergia/:id')
    async eliminarAlergia(@Param('id') actividadId: string): Promise<void> {
      await this.AlergiasService.eliminarAlergia(actividadId);
    }
}
