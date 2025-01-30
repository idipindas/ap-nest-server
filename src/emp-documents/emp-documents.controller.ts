import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmpDocumentsService } from './emp-documents.service';
import { CreateEmpDocumentDto } from './dto/create-emp-document.dto';
import { UpdateEmpDocumentDto } from './dto/update-emp-document.dto';

@Controller('emp-documents')
export class EmpDocumentsController {
  constructor(private readonly empDocumentsService: EmpDocumentsService) {}

  @Post()
  create(@Body() createEmpDocumentDto: CreateEmpDocumentDto) {
    return this.empDocumentsService.create(createEmpDocumentDto);
  }

  @Get()
  findAll() {
    return this.empDocumentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empDocumentsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmpDocumentDto: UpdateEmpDocumentDto,
  ) {
    return this.empDocumentsService.update(id, updateEmpDocumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empDocumentsService.remove(+id);
  }
}
