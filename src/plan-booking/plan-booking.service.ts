import { Injectable } from '@nestjs/common';
import { CreatePlanBookingDto } from './dto/create-plan-booking.dto';
import { UpdatePlanBookingDto } from './dto/update-plan-booking.dto';

@Injectable()
export class PlanBookingService {
  create(createPlanBookingDto: CreatePlanBookingDto) {
    return 'This action adds a new planBooking';
  }

  findAll() {
    return `This action returns all planBooking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} planBooking`;
  }

  update(id: number, updatePlanBookingDto: UpdatePlanBookingDto) {
    return `This action updates a #${id} planBooking`;
  }

  remove(id: number) {
    return `This action removes a #${id} planBooking`;
  }
}
