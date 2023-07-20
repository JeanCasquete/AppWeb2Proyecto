import { Test, TestingModule } from '@nestjs/testing';
import { HistorialmedicoController } from './historialesmedicos.controller';

describe('HistorialmedicoController', () => {
  let controller: HistorialmedicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistorialmedicoController],
    }).compile();

    controller = module.get<HistorialmedicoController>(HistorialmedicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
