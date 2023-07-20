import { Test, TestingModule } from '@nestjs/testing';
import { CitasMedicasService } from './citas-medicas.service';

describe('CitasMedicasService', () => {
  let service: CitasMedicasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitasMedicasService],
    }).compile();

    service = module.get<CitasMedicasService>(CitasMedicasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
