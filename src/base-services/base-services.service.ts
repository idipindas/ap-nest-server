import { Injectable } from '@nestjs/common';
import { CreateBaseServiceDto } from './dto/create-base-service.dto';
import { UpdateBaseServiceDto } from './dto/update-base-service.dto';
import { InjectModel } from '@nestjs/mongoose';
import { BaseServices } from './models/base-services.model';
import { Model } from 'mongoose';

@Injectable()
export class BaseServicesService {
  constructor(
    @InjectModel(BaseServices.name)
    private readonly serviceModel: Model<BaseServices>,
  ) {}

  async create(createBaseServiceDto: CreateBaseServiceDto) {
    const newService = new this.serviceModel(createBaseServiceDto);
    return await newService.save();
  }

  async findAll() {
    const resp = await this.serviceModel.find();

    return resp;
  }

  async findOne(id: number) {
    const resp = await this.serviceModel.findById(id);

    return resp;
  }

  async update(id: string, updateBaseServiceDto: UpdateBaseServiceDto) {
    if (!id) {
      throw new Error('ID is required to update an service.');
    }

    const updateService = await this.serviceModel.findByIdAndUpdate(
      id,
      updateBaseServiceDto,
      { new: true, runValidators: true },
    );

    if (!updateService) {
      throw new Error(`Admin with ID ${id} not found.`);
    }

    return updateService;
  }

  async remove(id: string) {
    const resp = await this.serviceModel.findByIdAndDelete(id);
    return resp;
  }
}
