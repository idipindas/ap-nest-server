import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BaseServicesService } from './base-services.service';
import { CreateBaseServiceDto } from './dto/create-base-service.dto';
import { UpdateBaseServiceDto } from './dto/update-base-service.dto';

@Controller('services')
export class BaseServicesController {
  constructor(private readonly baseServicesService: BaseServicesService) {}

  @Post()
  create(@Body() createBaseServiceDto: CreateBaseServiceDto) {
    return this.baseServicesService.create(createBaseServiceDto);
  }

  @Get()
  findAll() {
    return this.baseServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.baseServicesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBaseServiceDto: UpdateBaseServiceDto,
  ) {
    return this.baseServicesService.update(id, updateBaseServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.baseServicesService.remove(id);
  }
}
