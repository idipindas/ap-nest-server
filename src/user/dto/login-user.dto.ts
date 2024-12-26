import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, IsMongoId } from 'class-validator';

export class LoginUserDto {

  @IsEmail()
  @IsNotEmpty()
  email: string;

 
  @IsString()
  @IsNotEmpty()
  password: string;
}
