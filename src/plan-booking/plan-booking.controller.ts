import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlanBookingService } from './plan-booking.service';
import { CreatePlanBookingDto } from './dto/create-plan-booking.dto';
import { UpdatePlanBookingDto } from './dto/update-plan-booking.dto';

@Controller('plan-booking')
export class PlanBookingController {
  constructor(private readonly planBookingService: PlanBookingService) {}

  @Post()
  create(@Body() createPlanBookingDto: CreatePlanBookingDto) {
    return this.planBookingService.create(createPlanBookingDto);
  }

  @Get()
  findAll() {
    return this.planBookingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planBookingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlanBookingDto: UpdatePlanBookingDto) {
    return this.planBookingService.update(+id, updatePlanBookingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planBookingService.remove(+id);
  }
}
