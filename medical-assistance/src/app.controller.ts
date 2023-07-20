import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { DatabaseService } from './database.service';

@Controller()
export class AppController {
  constructor(private readonly databaseService: DatabaseService) {}
  @Get('/users')
  async findAll(@Res() res: Response) {
    try {
      const results = await this.databaseService.query('SELECT * FROM users');
      console.log('Resultados de la consulta:', results);
      res.json(results);
    } catch (error) {
      console.error('Error al hacer consulta:', error);
      res.status(500).json({ error: 'Error al hacer consulta' });
    }
  }

  @Get('/usuarios')
  getUsuarios(@Res() res: Response): any {
    const usuarios =[
      { id: 1, nombre: 'Juan', correo: 'juan@example.com' },
      { id: 2, nombre: 'María', correo: 'maria@example.com' },
      { id: 3, nombre: 'Pedro', correo: 'pedro@example.com2' },
    ];
    res.json(usuarios);
  }


}
