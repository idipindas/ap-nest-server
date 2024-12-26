import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './models/user.model';
import { Model } from 'mongoose';
import { jwtService } from '../auth/strategies/jwt.strategies';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly jwtService: jwtService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const password = createUserDto.password;
    const hash = await this.jwtService.hashPassword(createUserDto.password);
    createUserDto.password = hash;

    const resp = await this.userModel.create(createUserDto);
    const token = await this.jwtService.generateToken(password);

    return { resp, token };
  }

  async login(email: any, password: string) {
    const user = await this.userModel.findOne({ email });
    if (!user) throw new Error('Invalid credentials');
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error('Invalid credentials');
    const token = await this.jwtService.generateToken(user.password);

    return { token };
  }

  async findAll() {
    const resp = await this.userModel.find();
    return resp;
  }

  async findOne(id: number) {
    const resp = await this.userModel.findById(id);
    return resp;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const resp = await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
    return resp;
  }

  async remove(id: number) {
    const resp = await this.userModel.findByIdAndDelete(id);
    return resp;
  }
}
