import { Test } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  const mockUserService = {
    getUserData: jest.fn().mockReturnValue({ message: 'Hello API' }),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: 'PRODUCT_SERVICE',
          useValue: mockUserService,
        },
      ],
    }).compile();

    service = moduleRef.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      expect(service.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
