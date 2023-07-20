import { Test, TestingModule } from '@nestjs/testing';
import { HistorialMedicoService} from './historialesmedicos.service';

describe('HistorialesMedicosService', () => {
  let service: HistorialMedicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistorialMedicoService],
    }).compile();

    service = module.get<HistorialMedicoService>(HistorialMedicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
