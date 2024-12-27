import { Injectable } from '@nestjs/common';
import { CreateEmpDocumentDto } from './dto/create-emp-document.dto';
import { UpdateEmpDocumentDto } from './dto/update-emp-document.dto';
import { InjectModel } from '@nestjs/mongoose';
import { EmployeeDocument } from './models/emp_document.model';
import { Model } from 'mongoose';

@Injectable()
export class EmpDocumentsService {
  constructor(
    @InjectModel(EmployeeDocument.name)
    private readonly empDocModel: Model<EmployeeDocument>,
  ) {}
  async create(createEmpDocumentDto: CreateEmpDocumentDto) {
    const resp = await this.empDocModel.create(createEmpDocumentDto);
    return resp;
  }

  async findAll() {
    const resp = await this.empDocModel.find();
    return resp;
  }

  async findOne(id: string) {
    const resp = await this.empDocModel.findById(id);
    return resp;
  }

  async update(id: string, updateEmpDocumentDto: UpdateEmpDocumentDto) {
    const resp = await this.empDocModel.findByIdAndUpdate(
      id,
      updateEmpDocumentDto,
    );
    return resp;
  }

  async remove(id: number) {
    const resp = await this.empDocModel.findByIdAndDelete(id);
    return resp;
  }
}
