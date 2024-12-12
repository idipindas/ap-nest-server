import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAdminDto } from './dto/create-admin.dto';
import { Admin } from './model/admin.model';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private readonly adminModel: Model<Admin>,
  ) {}

  async createAdmin(createAdminDto: CreateAdminDto): Promise<Admin> {
    const newAdmin = new this.adminModel(createAdminDto);
    return await newAdmin.save();
  }

  async update(id: string, updateAdminDto: UpdateAdminDto) {
    if (!id) {
      throw new Error('ID is required to update an admin.');
    }

    const updatedAdmin = await this.adminModel.findByIdAndUpdate(
      id,
      updateAdminDto,
      { new: true, runValidators: true }, 
    );

    if (!updatedAdmin) {
      throw new Error(`Admin with ID ${id} not found.`);
    }

    return updatedAdmin;
  }

  async remove(id: string) {
    const resp = await this.adminModel.findByIdAndDelete(id);
    return resp;
  }
  async findAll(): Promise<Admin[]> {
    return await this.adminModel.find().exec();
  }
  async findOne(id: string): Promise<Admin> {
    return await this.adminModel.findById(id).exec();
  }
}
