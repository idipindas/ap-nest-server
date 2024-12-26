import { Injectable } from '@nestjs/common';
import { CreateCenterDto } from './dto/create-center.dto';
import { UpdateCenterDto } from './dto/update-center.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Centers } from './models/centers.model';
import { Model } from 'mongoose';

@Injectable()
export class CentersService {
  constructor(
    @InjectModel(Centers.name) private readonly centerModel: Model<Centers>,
  ) {}
  async create(createCenterDto: CreateCenterDto) {
    const newCenter = new this.centerModel(createCenterDto);
    return await newCenter.save();
  }

  async findAll() {
    const resp = await this.centerModel.find();

    return resp;
  }

  async findOne(id: number) {
    const resp = await this.centerModel.findById(id);
    return resp;
  }

  async update(id: number, updateCenterDto: UpdateCenterDto) {
    const resp = await this.centerModel.findByIdAndUpdate(id, updateCenterDto);
    return resp;
  }

  async remove(id: number) {
    const resp = await this.centerModel.findByIdAndDelete(id);
    return resp;
  }
}
