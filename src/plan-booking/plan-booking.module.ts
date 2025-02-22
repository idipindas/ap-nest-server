import { Module } from '@nestjs/common';
import { PlanBookingService } from './plan-booking.service';
import { PlanBookingController } from './plan-booking.controller';

@Module({
  controllers: [PlanBookingController],
  providers: [PlanBookingService],
})
export class PlanBookingModule {}
