import { PartialType } from '@nestjs/mapped-types';
import { CreateBaseServiceDto } from './create-base-service.dto';

export class UpdateBaseServiceDto extends PartialType(CreateBaseServiceDto) {}
