import { Test, TestingModule } from '@nestjs/testing';
import { AlergiasController } from './alergias.controller';

describe('AlergiasController', () => {
  let controller: AlergiasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlergiasController],
    }).compile();

    controller = module.get<AlergiasController>(AlergiasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
