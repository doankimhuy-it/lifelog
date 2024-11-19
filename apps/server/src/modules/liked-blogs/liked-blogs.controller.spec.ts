import { Test, TestingModule } from '@nestjs/testing';
import { LikedBlogsController } from './liked-blogs.controller';

describe('LikedBlogsController', () => {
  let controller: LikedBlogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LikedBlogsController],
    }).compile();

    controller = module.get<LikedBlogsController>(LikedBlogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
