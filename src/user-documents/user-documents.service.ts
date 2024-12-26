import { Injectable } from '@nestjs/common';
import { CreateUserDocumentDto } from './dto/create-user-document.dto';
import { UpdateUserDocumentDto } from './dto/update-user-document.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocuments } from './models/user-document.model';
import { Model } from 'mongoose';

@Injectable()
export class UserDocumentsService {
  constructor(
    @InjectModel(UserDocuments.name)
    private readonly userDocumentModel: Model<UserDocuments>,
  ) {}
  async create(createUserDocumentDto: CreateUserDocumentDto) {
    const resp = await this.userDocumentModel.create(createUserDocumentDto);
    return resp;
  }

  async findAll() {
    const resp = await this.userDocumentModel.find();
    return resp;
  }

  async findOne(id: number) {
    const resp = await this.userDocumentModel.findById(id);
    return resp;
  }

  async update(id: number, updateUserDocumentDto: UpdateUserDocumentDto) {
    const resp = await this.userDocumentModel.findByIdAndUpdate(
      id,
      updateUserDocumentDto,
    );
    return resp;
  }

  async remove(id: number) {
    const resp = await this.userDocumentModel.findByIdAndDelete(id);
    return resp;
  }
}
