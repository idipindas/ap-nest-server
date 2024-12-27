import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpDocumentDto } from './create-emp-document.dto';

export class UpdateEmpDocumentDto extends PartialType(CreateEmpDocumentDto) {}
