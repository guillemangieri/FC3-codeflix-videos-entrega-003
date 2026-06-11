import { Test, TestingModule } from '@nestjs/testing';
import { CastMemberController } from '../cast-member.controller';
import { CastMemberService } from '../cast-member.service';

describe('CastMemberController', () => {
  let controller: CastMemberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CastMemberController],
      providers: [CastMemberService],
    }).compile();

    controller = module.get<CastMemberController>(CastMemberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
