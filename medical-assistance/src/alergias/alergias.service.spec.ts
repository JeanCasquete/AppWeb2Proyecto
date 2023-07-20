import { Test, TestingModule } from '@nestjs/testing';
import { AlergiasService } from './alergias.service';

describe('AlergiasService', () => {
  let service: AlergiasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlergiasService],
    }).compile();

    service = module.get<AlergiasService>(AlergiasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
