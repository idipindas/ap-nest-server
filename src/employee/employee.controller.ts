import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { CreateBankDetailsDto } from './dto/create-bankdetails.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as fs from 'fs';
import { CreateEmployeeDto } from './dto/create-employee.dto';


const photoStorage = {
  storage: diskStorage({
    destination: './uploads/photos',
    filename: (req, file, callback) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const fileExtName = extname(file.originalname);
      callback(null, `${file.fieldname}-${uniqueSuffix}${fileExtName}`);
    },
  }),
};

// Multer storage configuration for Aadhaar file
const adharStorage = {
  storage: diskStorage({
    destination: './uploads/adhars',
    filename: (req, file, callback) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const fileExtName = extname(file.originalname);
      callback(null, `${file.fieldname}-${uniqueSuffix}${fileExtName}`);
    },
  }),
};
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) { }
  @Post()
  create(@Body() employeeDto: CreateEmployeeDto) {
    return this.employeeService.create(employeeDto);
  }
  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeeService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }

  @Post('/bank-details')
  createBankDetails(@Body() createbankDetails: CreateBankDetailsDto) {
    return this.employeeService.createBankDetails(createbankDetails);
  }

  @Get('/bank-details')
  findAllBankDetails() {
    return this.employeeService.findAllBankDetails();
  }

  @Get('/bank-details/:id')
  findOneBankDetails(@Param('id') id: string) {
    return this.employeeService.findOneBankDetails(+id);
  }

  @Patch('/bank-details/:id')
  updateBankDetails(
    @Param('id') id: string,
    @Body() updateBankDetials: CreateBankDetailsDto,
  ) {
    return this.employeeService.updateBankDetails(+id, updateBankDetials);
  }

  @Delete('/bank-details/:id')
  removeBankDetails(@Param('id') id: string) {
    return this.employeeService.removeBankDetails(+id);
  }
}
