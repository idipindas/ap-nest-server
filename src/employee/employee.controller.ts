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
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { CreateBankDetailsDto } from './dto/create-bankdetails.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import * as fs from 'fs';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (req, file, cb) => {
          const uploadDir = path.join(
            process.cwd(),
            'uploads/employee-photo',
          );
          if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
          }
          cb(null, uploadDir);
        },
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = path.extname(file.originalname);
          cb(null, `${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  create(
    @UploadedFile() file: Express.Multer.File,

    @Body() createEmployeeDto: CreateEmployeeDto,
  ) {
    console.log("data===============================================")
    const baseDir = process.cwd();
    const relativePath = path.relative(baseDir, file.path);
    const normalizedPath = relativePath.replace(/\\/g, '/');

    createEmployeeDto.photo = normalizedPath;
    return this.employeeService.create(createEmployeeDto);
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
