import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseService } from '../../database.service';


@Module({
    imports: [PassportModule],
    controllers: [AuthController],
    providers: [AuthService, DatabaseService],
  })
  export class AuthModule {}