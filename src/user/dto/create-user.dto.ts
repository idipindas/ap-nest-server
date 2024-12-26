import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, IsMongoId } from 'class-validator';

export class CreateUserDto {
  @IsBoolean()
  status: boolean;

  @IsString()
  @IsNotEmpty()
  user_name: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  alt_phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  pin: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsMongoId()
  @IsNotEmpty()
  center: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
