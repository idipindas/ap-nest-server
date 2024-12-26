import { Module } from '@nestjs/common';
import { CentersService } from './centers.service';
import { CentersController } from './centers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Centers, CentersSchema } from './models/centers.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Centers.name, schema: CentersSchema }]),
  ],
  controllers: [CentersController],
  providers: [CentersService],
})
export class CentersModule {}
