import { Module } from '@nestjs/common';
import { BaseServicesService } from './base-services.service';
import { BaseServicesController } from './base-services.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BaseServices, baseServicesSchema } from './models/base-services.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BaseServices.name, schema: baseServicesSchema },
    ]),
  ],
  controllers: [BaseServicesController],
  providers: [BaseServicesService],
})
export class BaseServicesModule {}
