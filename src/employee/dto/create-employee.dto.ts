import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsMongoId,
} from 'class-validator';

export class CreateEmployeeDto {
//   @IsBoolean()
//   @IsOptional()
//   status?: boolean;

  @IsString()
  @IsNotEmpty()
  employee_name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsMongoId()
  @IsNotEmpty()
  center: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  alt_phone: string;

  @IsString()
  @IsOptional()
  photo?: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
