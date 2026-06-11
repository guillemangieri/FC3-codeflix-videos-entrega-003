import { GoogleCloudStorage } from '@core/shared/infra/storage/google-cloud.storage';
import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Storage as GoogleCloudStorageSdk } from '@google-cloud/storage';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_PRIVATE_KEY || 'test-secret',
    }),
  ],
  providers: [
    {
      provide: 'IStorage',
      useFactory: (configService: ConfigService) => {
        const credentials = configService.get('GOOGLE_CLOUD_CREDENTIALS');
        const bucket = configService.get('GOOGLE_CLOUD_STORAGE_BUCKET_NAME');
        const storage = new GoogleCloudStorageSdk({
          credentials,
        });
        return new GoogleCloudStorage(storage, bucket);
      },
      inject: [ConfigService],
    },
  ],
  exports: ['IStorage', JwtModule],
})
export class SharedModule {}
