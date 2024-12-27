import { Module } from '@nestjs/common';
import { EmpDocumentsService } from './emp-documents.service';
import { EmpDocumentsController } from './emp-documents.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  EmployeeDocument,
  EmployeeDocumentSchema,
} from './models/emp_document.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: EmployeeDocument.name, schema: EmployeeDocumentSchema },
    ]),
  ],
  controllers: [EmpDocumentsController],
  providers: [EmpDocumentsService],
})
export class EmpDocumentsModule {}
