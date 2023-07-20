import { Body, Controller,Get,Res, HttpCode, Post,Put,Param,Delete } from '@nestjs/common';
import { Response } from 'express';
import { Doctor } from './doctor/doctor.model';
import { DoctorService } from './doctor.service';
import { DatabaseService } from '../database.service';


@Controller()
export class DoctoresController {
    constructor(private readonly databaseService: DatabaseService,private readonly doctoresService: DoctorService) {}
    @Get('/doctores')
    async findDocs(@Res() res: Response) {
      try {
        const results = await this.databaseService.query('SELECT * FROM doctores order by id ASC');
        console.log('Resultados de la consulta:', results);
        res.json(results);
      } catch (error) {
        console.error('Error al hacer consulta:', error);
        res.status(500).json({ error: 'Error al hacer consulta' });
      }
    }

    @Get('/doctores/:nombre')
    async findDocByNombre(@Res() res: Response, @Param('nombre') nombre: string) {
      try {
        const query = 'SELECT * FROM doctores WHERE nombre ILIKE $1';
        const results = await this.databaseService.query(query, [nombre]);
        console.log('Resultados de la consulta:', results);
        console.log('Resultados de la consulta:', nombre);

    
        if (results.length === 0) {
          res.status(404).json({ error: 'Doctor no encontrado' });
        } else {
          res.json(results);
        }
      } catch (error) {
        console.error('Error al hacer consulta:', error);
        res.status(500).json({ error: 'Error al hacer consulta' });
      }
    }


    @Get('/doctoress/:id')
async findDocById(@Res() res: Response, @Param('id') id: number) {
  try {
    const query = 'SELECT * FROM doctores WHERE id = $1';
    const results = await this.databaseService.query(query, [id]);
    console.log('Resultado de la consulta:', results);

    if (results.length === 0) {
      res.status(404).json({ error: 'Doctor no encontrado' });
    } else {
      res.json(results[0]);
    }
  } catch (error) {
    console.error('Error al hacer consulta:', error);
    res.status(500).json({ error: 'Error al hacer consulta' });
  }
}

    




    @Post('registro-doctores')
    async registro(@Body() doctor: Doctor): Promise<Doctor> {
      return await this.doctoresService.registrarDoctor(doctor);
    }

    @Put('actualizar-doctor/:id')
    async actualizarDoctor(@Param('id') doctorId: string, @Body() doctor: Doctor): Promise<Doctor> {
      return await this.doctoresService.actualizarDoctor(doctorId, doctor);
    }


    @Delete('eliminar-doctor/:id')
    async eliminarDoctor(@Param('id') doctorId: string): Promise<void> {
      await this.doctoresService.eliminarDoctor(doctorId);
    }
    

}