import { Body,Controller, Get,Res,HttpCode, Post,Put,Param,Delete } from '@nestjs/common';
import { Response } from 'express';
import { actividad } from './actividad/actividad.model';
import { ActividadesService } from './actividades.service';
import { DatabaseService } from 'src/database.service';

@Controller()
export class ActividadesController {
    constructor(private readonly databaseService: DatabaseService,private readonly actividadesService: ActividadesService) {}
    @Get('/actividades')
    async findDocs(@Res() res: Response) {
      try {
        const results = await this.databaseService.query('select * from activities_diaries');
        console.log('Resultados de la consulta:', results);
        res.json(results);
      } catch (error) {
        console.error('Error al hacer consulta:', error);
        res.status(500).json({ error: 'Error al hacer consulta' });
      }
    }
    @Post('registro-actividad')
    async registro(@Body() actividad: actividad): Promise<actividad> {
      return await this.actividadesService.registrarActividad(actividad);
    }

    @Put('actualizar-actividad/:id')
    async actualizarActividad(@Param('id') actividadId: string, @Body() actividad: actividad): Promise<actividad> {
      return await this.actividadesService.actualizarActividad(actividadId, actividad);
    }


    @Delete('eliminar-actividad/:id')
    async eliminarActividad(@Param('id') actividadId: string): Promise<void> {
      await this.actividadesService.eliminarActividad(actividadId);
    }
}
