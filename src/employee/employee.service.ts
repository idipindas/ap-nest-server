import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './models/employee.model';
import { EmployeeBankDetails } from './models/bank-details.model';
import { Model } from 'mongoose';
import { CreateBankDetailsDto } from './dto/create-bankdetails.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private readonly employeeModel: Model<Employee>,
    @InjectModel(EmployeeBankDetails.name)
    private readonly bankDetailModel: Model<EmployeeBankDetails>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    console.log('88888888888888888888888888888888', createEmployeeDto);

    const resp = await this.employeeModel.create(createEmployeeDto);

    return resp;
  }
  async createBankDetails(createBankDetailsDto: CreateBankDetailsDto) {
    const resp = await this.bankDetailModel.create(createBankDetailsDto);
    return resp;
  }

  async findAll() {
    const resp = await this.employeeModel.find();
    return resp;
  }
  async findAllBankDetails() {
    const resp = await this.bankDetailModel.find();
    return resp;
  }

  async findOne(id: number) {
    const resp = await this.employeeModel.findById(id);

    return resp;
  }

  async findOneBankDetails(id: number) {
    const resp = await this.bankDetailModel.findById(id);

    return resp;
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const resp = await this.employeeModel.findByIdAndUpdate(
      id,
      updateEmployeeDto,
    );
    return resp;
  }

  async updateBankDetails(
    id: number,
    updateBankDetailsDto: CreateBankDetailsDto,
  ) {
    const resp = await this.employeeModel.findByIdAndUpdate(
      id,
      updateBankDetailsDto,
    );
    return resp;
  }

  async remove(id: number) {
    const resp = await this.employeeModel.findByIdAndDelete(id);
    return resp;
  }
  async removeBankDetails(id: number) {
    const resp = await this.bankDetailModel.findByIdAndDelete(id);
    return resp;
  }
}
