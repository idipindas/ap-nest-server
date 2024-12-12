import { Module } from '@nestjs/common';
import { PlansService } from './plans.service';
import { PlansController } from './plans.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Plans, PlanSchema } from './models/plan.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Plans.name, schema: PlanSchema }]),
  ],
  controllers: [PlansController],
  providers: [PlansService],
})
export class PlansModule {}
