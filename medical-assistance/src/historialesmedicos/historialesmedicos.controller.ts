import { Controller,Body,Get,Res, Post,Put,Param,Delete } from '@nestjs/common';
import { Response } from 'express';
import { HistorialMedico } from './historial-medico/historial-medico';
import { DatabaseService } from 'src/database.service';
import { HistorialMedicoService } from './historialesmedicos.service';

@Controller()
export class HistorialmedicoController {
  constructor(private readonly historialMedicoService: HistorialMedicoService) {}

  @Get('historialmedico/:id')
  async getHistorialMedico(@Param('id') id: string, @Res() res: Response) {
    try {
      const idNumber = parseInt(id);
      const results = await this.historialMedicoService.getHistorialMedico(idNumber);
      console.log('Resultados de la consulta:', results);

      res.json(results);
    } catch (error) {
      console.error('Error al hacer consulta:', error);
      res.status(500).json({ error: 'Error al hacer consulta' });
    }
  }
  @Post('registrarHistorial')
  async registrarAlergia(@Body() HistorialMedico: HistorialMedico): Promise<HistorialMedico> {
    return await this.historialMedicoService.registrarHistorial(HistorialMedico);
  }

  @Put('actualizar-historial/:id')
  async actualizarAlergia(@Param('id') historial_medico_id: string, @Body() HistorialMedico: HistorialMedico): Promise<HistorialMedico> {
    return await this.historialMedicoService.actualizarHistorialMedico(historial_medico_id, HistorialMedico);
  }



}
