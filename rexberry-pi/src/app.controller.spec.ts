import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('health checking', () => {
    it('should return ok', async () => {
      const { ok }: any = await appController.healthCheck();
      expect(ok).toBeTruthy();
    });
  });
});
