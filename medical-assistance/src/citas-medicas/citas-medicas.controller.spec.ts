import { Test, TestingModule } from '@nestjs/testing';
import { CitasMedicasController } from './citas-medicas.controller';
import { CitasMedicasService } from './citas-medicas.service';

describe('CitasMedicasController', () => {
  let controller: CitasMedicasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitasMedicasController],
      providers: [CitasMedicasService],
    }).compile();

    controller = module.get<CitasMedicasController>(CitasMedicasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
