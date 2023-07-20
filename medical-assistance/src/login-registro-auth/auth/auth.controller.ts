import {
  Body,
  Controller,
  HttpCode,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../user/user.model';
import { BadRequestException } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('registro')
  async registro(@Body() usuario: User): Promise<User> {
    return await this.authService.registrarUsuario(usuario);
  }

  @Post('login')
  @HttpCode(200)
  async login(
    @Body('correo') correo: string,
    @Body('contrasena') contrasena: string,
  ): Promise<User> {
    console.log('correo:', correo);
    console.log('contraseña:', contrasena);
    const { user, message } = await this.authService.login(correo, contrasena);
    if (user) {
      console.log(message);
      return user;
    } else {
      throw new BadRequestException(message);
    }
  }
  @Put('/:id')
  async updateUser(
    @Param('id') userId: number,
    @Body() updatedUserData: User,
  ): Promise<User> {
    return this.authService.updateUser(userId, updatedUserData);
  }
  @Delete('/:id')
  async deleteUser(@Param('id') userId: number): Promise<void> {
    return this.authService.deleteUser(userId);
  }
}
