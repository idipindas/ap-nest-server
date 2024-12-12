import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Plans } from './models/plan.model';
import { Model } from 'mongoose';

@Injectable()
export class PlansService {
  constructor(
    @InjectModel(Plans.name)
    private readonly planModel: Model<Plans>,
  ) {}
  async create(createPlanDto: CreatePlanDto) {
    const newPlan = new this.planModel(createPlanDto);
    return await newPlan.save();
  }

  async findAll() {
    const resp = await this.planModel.find();

    return resp;
  }

  async findOne(id: number) {
    const resp = await this.planModel.findById(id);

    return resp;
  }

  async update(id: string, updatePlanDto: UpdatePlanDto) {
    console.log(id, updatePlanDto);
    
    if (!id) {
      throw new Error('ID is required to update a plan.');
    }

    const updatedPlan = await this.planModel.findByIdAndUpdate(
      id,
      updatePlanDto,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedPlan) {
      throw new Error(`Plan with ID ${id} not found.`);
    }

    return updatedPlan;
  }

  async remove(id: number) {
    const resp = await this.planModel.findByIdAndDelete(id);
    return `This action removes a #${id} plan`;
  }
}
