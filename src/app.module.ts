import { Module } from '@nestjs/common';
import { ConfigModule } from './nest-modules/config-module/config.module';
import { DatabaseModule } from './nest-modules/database-module/database.module';
import { CategoriesModule } from './nest-modules/categories-module/categories.module';
import { SharedModule } from './nest-modules/shared-module/shared-module.module';
import { CastMemberModule } from './nest-modules/cast-member-module/cast-member.module';

@Module({
  imports: [
    ConfigModule,
    ConfigModule.forRoot(),
    DatabaseModule,
    CategoriesModule,
    SharedModule,
    CastMemberModule,
  ],
})
export class AppModule {}
