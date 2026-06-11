import { Module } from '@nestjs/common';
import { CastMemberService } from './cast-member.service';
import { CastMemberController } from './cast-member.controller';

@Module({
  controllers: [CastMemberController],
  providers: [CastMemberService],
})
export class CastMemberModule {}
