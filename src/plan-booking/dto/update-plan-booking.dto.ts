import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanBookingDto } from './create-plan-booking.dto';

export class UpdatePlanBookingDto extends PartialType(CreatePlanBookingDto) {}
